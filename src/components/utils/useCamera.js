import { useState, useRef, useEffect } from 'react';

export function useCamera() {
	const mediaRecorder = useRef();
	const mount = useRef(true);

	useEffect(() => {
		return () => {
			mount.current = false;
			console.log('un-mount');
		};
	}, []);

	const [state, setstate] = useState({
		mediaStream: null,
		mediaBlob: null,
		devices: [],
		log: [],
	});

	const getDevices = async kind => {
		try {
			if (state.devices.length <= 0) {
				const res = await navigator.mediaDevices.enumerateDevices();
				if (mount.current) {
					setstate({
						...state,
						devices: res,
					});
					return res.filter(element => element.kind === kind);
				}
			} else {
				return state.devices.filter(element => element.kind === kind);
			}
		} catch (err) {
			console.log(err);
		}
		return [];
	};

	const outputFormatVideos = [
		{ key: 'video/webm;codecs=vp8,opus', value: 'WebM (.webm)' },
		{ key: 'video/mp4', value: 'MPEG-4 (.mp4)' },
	];

	const getVideoSource = async () => await getDevices('videoinput');

	const getAudioInputSource = async () => await getDevices('audioinput');

	const getAudioOutputDestination = async () =>
		await getDevices('audiooutput');

	const POWER_OFF = 'Power OFF\n';
	const POWER_ON = 'Power ON\n';
	const CAMERA_OFF = 'Camera OFF!\n';
	const CAMERA_ON = 'Camera ON!\n';
	const RECORDING = 'Recording!\n';
	const NOT_RECORDING = 'Not recording!\n';
	const START_RECORDING = 'Start recording\n';
	const STOP_RECORDING = 'Stop recording\n';
	const CLEAR_VIDEO = 'Clear video\n';

	const getLog = text => {
		const d = new Date();
		const value = `${d.toTimeString().substr(0, 8)} - ${text}`;
		return [value, ...state.log];
	};

	const validateOnCamera = () => {
		if (state.mediaStream) {
			if (mount.current) {
				setstate({
					...state,
					log: getLog(CAMERA_ON),
				});
			}
			console.log(CAMERA_ON);
			return true;
		}
		return false;
	};

	const validateOffCamera = () => {
		if (!state.mediaStream) {
			if (mount.current) {
				setstate({
					...state,
					log: getLog(CAMERA_OFF),
				});
			}
			console.log(CAMERA_OFF);
			return true;
		}
		return false;
	};

	const validateOnRecording = () => {
		if (
			mediaRecorder &&
			mediaRecorder.current &&
			mediaRecorder.current.state !== 'inactive'
		) {
			return true;
		} else {
			if (mount.current) {
				setstate({
					...state,
					log: getLog(NOT_RECORDING),
				});
			}
			console.log(NOT_RECORDING);
			return false;
		}
	};

	const validateOffRecording = () => {
		if (
			mediaRecorder &&
			(!mediaRecorder.current ||
				mediaRecorder.current.state === 'inactive')
		) {
			return true;
		} else {
			if (mount.current) {
				setstate({
					...state,
					log: getLog(RECORDING),
				});
			}
			console.log(RECORDING);
			return false;
		}
	};

	const onCamera = async requestedMedia => {
		const on = validateOnCamera();

		if (!on) {
			try {
				const stream = await navigator.mediaDevices.getUserMedia(
					requestedMedia
				);
				if (mount.current) {
					setstate({
						...state,
						mediaBlob: null,
						mediaStream: stream,
						log: getLog(POWER_ON),
					});
				}
				console.log(POWER_ON);
				return true;
			} catch (err) {
				console.log(err);
			}
		}
		return false;
	};

	const offCamera = () => {
		const off = validateOffCamera();

		if (!off) {
			try {
				state.mediaStream.getTracks().forEach(track => {
					track.stop();
				});
				if (mount.current) {
					setstate({
						...state,
						mediaStream: null,
						log: getLog(POWER_OFF),
					});
				}
				console.log(POWER_OFF);
				return true;
			} catch (err) {
				console.log(err);
			}
		}
		return false;
	};

	const startRecording = () => {
		const off = validateOffCamera();

		if (!off) {
			const record = validateOffRecording();
			if (record) {
				mediaRecorder.current = new MediaRecorder(state.mediaStream);
				mediaRecorder.current.onerror = e => {
					console.log('error', e);
				};
				mediaRecorder.current.start();
				if (mount.current) {
					setstate({
						...state,
						mediaBlob: null,
						log: getLog(START_RECORDING),
					});
				}
				console.log(START_RECORDING);
				return true;
			}
		}
		return false;
	};

	const stopRecording = outputFormat => {
		const off = validateOffCamera();

		if (!off) {
			const record = validateOnRecording();
			if (record) {
				if (mediaRecorder.current.state !== 'inactive') {
					mediaRecorder.current.stop();
					state.mediaStream.current &&
						state.mediaStream.current
							.getTracks()
							.forEach(track => track.stop());
				}
				mediaRecorder.current.ondataavailable = e => {
					const outFile = outputFormat
						? new Blob([e.data], { type: outputFormat })
						: e.data;
					if (mount.current) {
						setstate({
							...state,
							mediaBlob: outFile,
							log: getLog(STOP_RECORDING),
						});
					}
				};
				console.log(STOP_RECORDING);
				return true;
			}
		}
		return false;
	};

	const removeMediaBlob = () => {
		if (mount.current) {
			setstate({
				...state,
				mediaBlob: null,
				log: getLog(CLEAR_VIDEO),
			});
		}
		console.log(CLEAR_VIDEO);
		return true;
	};

	return {
		mediaStream: state.mediaStream,
		startRecording,
		stopRecording,
		onCamera,
		offCamera,
		removeMediaBlob,
		mediaBlob: state.mediaBlob,
		getVideoSource,
		getAudioInputSource,
		getAudioOutputDestination,
		log: state.log,
		outputFormatVideos,
		mount,
		validateOnCamera,
		validateOffCamera,
		validateOnRecording,
		validateOffRecording,
	};
}
