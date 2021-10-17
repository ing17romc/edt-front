import React, { useRef, useEffect, useState } from 'react';
// import UI, { useCamera } from 'edt-lib';
import UI, { useCamera } from 'components';

import './camera.scss';

const Camera = () => {
	const videoRecordRef = useRef();
	const videoRef = useRef();
	const {
		mediaStream,
		startRecording,
		stopRecording,
		onCamera,
		offCamera,
		mediaBlob,
		log,
		outputFormatVideos,
		validateOffCamera,
	} = useCamera();

	const [videoSource, setVideoSource] = useState([]);
	const [videoinput, setVideoInput] = useState('');
	const [recording, setRecording] = useState(false);

	const [state, setstate] = useState({
		imageURL: '',
		outputFormat: outputFormatVideos[1].value,
	});
	const [loading, setloading] = useState(true);

	const disable = mediaStream !== null;
	const disableButtons = videoSource.length === 0;

	const onchange = (id, value) => {
		setstate({
			...state,
			[id]: value,
		});
	};

	useEffect(() => {
		const getVideoInput = async () => {
			const res = await navigator.mediaDevices.enumerateDevices();
			const select = res.filter(element => element.kind === 'videoinput');
			const array = [];

			select.forEach((element, index) => {
				array.push({
					value: `Camera ${index + 1}`,
					key: element.deviceId,
				});
			});

			setVideoSource(array);
			setVideoInput(array.length > 0 ? array[0].key : '');
		};

		getVideoInput();

		setloading(false);
	}, []);

	useEffect(() => {
		if (
			mediaStream &&
			videoRecordRef.current &&
			!videoRecordRef.current.srcObject
		) {
			videoRecordRef.current.srcObject = mediaStream;
		} else {
			videoRecordRef.current.srcObject = null;
		}
	}, [mediaStream]);

	useEffect(() => {
		const mediaBlobUrl = mediaBlob ? URL.createObjectURL(mediaBlob) : null;

		if (videoRef.current) {
			videoRef.current.src = mediaBlobUrl;
		}
	}, [mediaBlob]);

	const OnCamera = async () => {
		setloading(true);
		const CAPTURE_OPTIONS = {
			audio: true,
			video: {
				deviceId: videoinput ? { exact: videoinput } : undefined,
				width: { min: 640, ideal: 1920 },
				height: { min: 400, ideal: 1080 },
			},
		};
		await onCamera(CAPTURE_OPTIONS);
		setloading(false);
	};

	const playVideo = () => {
		videoRef.current.currentTime = 0;
		videoRef.current.play();
	};

	const stopVideo = () => {
		videoRef.current.currentTime = 0;
		videoRef.current.pause();
	};

	const canvasEle = React.createRef();
	const takePhoto = async () => {
		const res = validateOffCamera();

		if (!res) {
			const width = videoRecordRef.current.videoWidth;
			const height = videoRecordRef.current.videoHeight;
			const ctx = canvasEle.current.getContext('2d');
			canvasEle.current.width = width;
			canvasEle.current.height = height;
			ctx.drawImage(videoRecordRef.current, 0, 0, width, height);
			const imageDataURL = canvasEle.current.toDataURL('image/png');

			setstate({
				...state,
				imageURL: imageDataURL,
			});
		}
	};

	return (
		<>
			{loading && <UI.Spinner />}
			<div className='container-body padding-v-40'>
				<div className='grid-primary'>
					<div className='start-1 size-12 padding-v-20'>
						<UI.Title label='Recording Video (POC)' />
						<br></br>
					</div>
					<div className='start-1 size-6 padding-v-20'>
						<UI.Selector
							id='lstVideoSource'
							options={videoSource}
							titleTop='Cameras'
							eventChange={seleccion =>
								onchange('videoinput', seleccion.target.value)
							}
							value={videoinput}
							disabled={disable}
						/>
					</div>
					<div className='size-3 padding-v-20'>
						<UI.Selector
							id='lstOutputFormat'
							options={outputFormatVideos}
							titleTop='Output format'
							eventChange={seleccion =>
								onchange('outputFormat', seleccion.target.value)
							}
							value={state.outputFormat}
						/>
					</div>
					<div className='start-1 size-6 padding-v-20'>
						<h4>Camera preview</h4>
						<div className='camera-container'>
							<video
								ref={videoRecordRef}
								autoPlay
								playsInline
								muted
							/>
							<div className='container-controls-rec'>
								<div className='controls-rec center'>
									{recording ? (
										<>
											<div className='rec on' />
											<p className='font-white strong'>
												{' '}
												Reconding...{' '}
											</p>
										</>
									) : (
										<></>
									)}
								</div>
							</div>
						</div>
					</div>
					<div className=' size-6 padding-v-20'>
						<h4>Recorded video</h4>
						<div className='camera-container'>
							<video ref={videoRef} controls />
						</div>
					</div>
					<div className='start-1 size-6 padding-v-20'>
						<h4>Photo</h4>
						<div className='photo center'>
							<canvas
								ref={canvasEle}
								style={{ display: 'none' }}></canvas>
							{state.imageURL ? (
								<img src={state.imageURL} alt='imageURL' />
							) : (
								<></>
							)}
						</div>
					</div>
					<div className='size-6 padding-v-20'>
						<h4>Logs</h4>
						<textarea
							className='log'
							readOnly={true}
							value={log.join('')}
						/>
					</div>

					<div className=' start-1 size-2 padding-v-20'>
						<UI.Button
							title='Start Recording'
							onClick={() => {
								startRecording();
								setRecording(true);
							}}
							disabled={disableButtons}
						/>
					</div>
					<div className=' size-2 padding-v-20'>
						<UI.Button
							title='Stop Recording'
							onClick={() => {
								stopRecording();
								setRecording(false);
							}}
							disabled={disableButtons}
						/>
					</div>
					<div className=' size-2 padding-v-20'>
						<UI.Button
							title='On Camera'
							onClick={() => {
								OnCamera();
								setRecording(false);
							}}
							disabled={disableButtons}
						/>
					</div>
					<div className=' size-2 padding-v-20'>
						<UI.Button
							title='Off Camera'
							onClick={() => {
								offCamera();
								setRecording(false);
							}}
							disabled={disableButtons}
						/>
					</div>
					<div className=' size-2 padding-v-20'>
						<UI.Button
							title='Take a photo'
							onClick={() => takePhoto()}
							disabled={disableButtons}
						/>
					</div>
					<div className=' size-1 padding-v-20'>
						<UI.Button
							title='Play'
							onClick={() => playVideo()}
							disabled={!mediaBlob}
						/>
					</div>
					<div className=' size-1 padding-v-20'>
						<UI.Button
							title='Stop'
							onClick={() => stopVideo()}
							disabled={!mediaBlob}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Camera;
