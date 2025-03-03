import React, { useState, useRef, useEffect } from 'react';
import styles from '../../styles/VideoPlayer.module.css';

function VideoPlayer({ videoSrc, poster }) {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef(null);
  const monitorRef = useRef(null);

  const speedIcons = {
    1: '/x1-button.png',  
    2: '/x2-button.png',  
    4: '/x4-button.png',  
  };

  useEffect(() => {
      // ✅ Listen for fullscreen change events
      const handleFullscreenChange = () => {
        const fullscreenElement = 
          document.fullscreenElement || 
          document.webkitFullscreenElement || 
          document.msFullscreenElement;
  
        setIsFullscreen(!!fullscreenElement); // ✅ Update state based on fullscreen status
      };
  
      document.addEventListener('fullscreenchange', handleFullscreenChange);
      document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.addEventListener('MSFullscreenChange', handleFullscreenChange);
  
      return () => {
        // ✅ Cleanup event listeners on component unmount
        document.removeEventListener('fullscreenchange', handleFullscreenChange);
        document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
        document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
      };
    }, []);

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
          onError={(e) => console.error('Video failed to load:', e)}
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
