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

  const getDevices = async (kind) => {
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

  const getAudioOutputDestination = async () => await getDevices('audiooutput');


  const power_off = 'Power OFF\n';
  const power_on = 'Power ON\n';
  const camera_off = 'Camera OFF!\n';
  const camera_on = 'Camera ON!\n';
  const recording = 'Recording!\n';
  const not_recording = 'Not recording!\n';
  const start_recording = 'Start recording\n';
  const stop_recording = 'Stop recording\n';
  const clear_video = 'Clear video\n';


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
          log: getLog(camera_on),
        });
      }
      console.log(camera_on);
      return true;
    }
    return false;
  };

  const validateOffCamera = () => {
    if (!state.mediaStream) {
      if (mount.current) {
        setstate({
          ...state,
          log: getLog(camera_off),
        });
      }
      console.log(camera_off);
      return true;
    }
    return false;
  };

  const validateOnRecording = () => {
    if (mediaRecorder && mediaRecorder.current && mediaRecorder.current.state !== 'inactive') {
      return true;
    } else {
      if (mount.current) {
        setstate({
          ...state,
          log: getLog(not_recording),
        });
      }
      console.log(not_recording);
      return false;
    }
  };

  const validateOffRecording = () => {
    if (mediaRecorder && (!mediaRecorder.current || mediaRecorder.current.state === 'inactive')) {
      return true;
    } else {
      if (mount.current) {
        setstate({
          ...state,
          log: getLog(recording),
        });
      }
      console.log(recording);
      return false;
    }
  };
  //============================================

  const onCamera = async (requestedMedia) => {
    const on = validateOnCamera();

    if (!on) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(requestedMedia);
        if (mount.current) {
          setstate({
            ...state,
            mediaBlob: null,
            mediaStream: stream,
            log: getLog(power_on),
          });
        }
        console.log(power_on);
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
            log: getLog(power_off),

          });
        }
        console.log(power_off);
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
            log: getLog(start_recording),
          });
        }
        console.log(start_recording);
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
            state.mediaStream.current.getTracks().forEach(track => track.stop());
        }
        mediaRecorder.current.ondataavailable = e => {
          const outFile = outputFormat ? new Blob([e.data], { type: outputFormat }) : e.data;
          if (mount.current) {
            setstate({
              ...state,
              mediaBlob: outFile,
              log: getLog(stop_recording),
            });
          }
        };
        console.log(stop_recording);
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
          log: getLog(clear_video),
        });

      }
      console.log(clear_video);
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
