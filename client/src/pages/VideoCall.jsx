import React from 'react';
import { useParams } from 'react-router-dom';

const VideoCall = () => {
  const { channelName } = useParams();

  const url = `https://skillswap-hq.daily.co/${channelName}`;

  return (
    <div style={{ height: '100vh', width: '100%', padding: '1rem' }}>
      <h2>Joining Room: {channelName}</h2>
      <iframe
        title="Daily.co Video Call"
        src={url}
        allow="camera; microphone; fullscreen; speaker; display-capture"
        style={{
          width: '100%',
          height: '90vh',
          border: 'none',
          borderRadius: '8px',
        }}
      />
    </div>
  );
};

export default VideoCall;
