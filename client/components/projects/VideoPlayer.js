import React, { useState, useRef } from 'react';
import styles from '../../styles/onlineCafe.module.css';

function VideoPlayer({ videoSrc, poster }) {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef(null);
  const monitorRef = useRef(null);

  const speedIcons = {
    1: '/x1-button.png',  // Replace with your x1 image
    2: '/x2-button.png',  // Replace with your x2 image
    4: '/x4-button.png',  // Replace with your x4 image
  };

  const toggleVideoPlayback = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    videoRef.current.muted = !isMuted;
  };

  const changePlaybackRate = () => {
    const newRate = playbackRate === 1 ? 2 : playbackRate === 2 ? 4 : 1;
    setPlaybackRate(newRate);
    videoRef.current.playbackRate = newRate;
  };

  const handleFullscreenToggle = () => {
    if (!isFullscreen) {
      if (monitorRef.current.requestFullscreen) {
        monitorRef.current.requestFullscreen();
      } else if (monitorRef.current.webkitRequestFullscreen) {
        monitorRef.current.webkitRequestFullscreen(); // Safari
      } else if (monitorRef.current.msRequestFullscreen) {
        monitorRef.current.msRequestFullscreen(); // IE/Edge
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen(); // Safari
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen(); // IE/Edge
      }
      setIsFullscreen(false);
    }
  };

  return (
    <div className={styles.videoSection}>
      <h2 className={styles.heading}>Demo Video</h2>
      <div ref={monitorRef} className={styles.monitor}>
        <video
          ref={videoRef}
          src={videoSrc}
          poster={poster}
          autoPlay={false}
          loop
          muted={isMuted}
          onClick={toggleVideoPlayback}
          onPlay={() => setVideoPlaying(true)}
          onPause={() => setVideoPlaying(false)}
        ></video>

        {!videoPlaying && (
          <img
            src="/play-button.png"
            alt="Play Button"
            className={styles.playButtonImage}
            onClick={toggleVideoPlayback}
          />
        )}

        <div className={styles.controls}>
          <img
            src={speedIcons[playbackRate]} 
            alt={`Playback Speed ${playbackRate}x`}
            className={styles.controlIcon}
            onClick={changePlaybackRate}
          />
          <img
            src={isMuted ? '/unmute-button.png' : '/mute-button.png'}  // Replace with your mute/unmute icons
            alt={isMuted ? 'Unmute' : 'Mute'}
            className={styles.controlIcon}
            onClick={toggleMute}
          />
          <img
            src={isFullscreen ? '/minimize-button.png' : '/fullscreen-button.png'}  // Replace with your fullscreen icons
            alt={isFullscreen ? 'Minimize' : 'Enter Fullscreen'}
            className={styles.controlIcon}
            onClick={handleFullscreenToggle}
          />
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
