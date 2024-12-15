import React, { useState } from 'react';

const Upload = () => {
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recording, setRecording] = useState(false);
  const [chunks, setChunks] = useState([]);

  const handleRecordClick = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
      const recorder = new MediaRecorder(stream);

      recorder.ondataavailable = (e) => {
        setChunks((prevChunks) => [...prevChunks, e.data]);
      };

      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'video/webm' });
        const videoUrl = URL.createObjectURL(blob);
        // Do something with the recorded video URL, like displaying it in a video element
        console.log(videoUrl);
      };

      recorder.start();
      setMediaRecorder(recorder);
      setRecording(true);
    } catch (error) {
      console.error('Error accessing media devices:', error);
    }
  };

  const handleStopClick = () => {
    mediaRecorder.stop();
    setRecording(false);
  };

  return (
    <div>
      {recording ? (
        <button onClick={handleStopClick}>Stop Recording</button>
      ) : (
        <button onClick={handleRecordClick}>Start Recording</button>
      )}
    </div>
  );
};

export default Upload;
