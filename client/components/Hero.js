import React, { useEffect, useRef } from 'react';
import styles from '../styles/Hero.module.css';
import ProjectCard from './ProjectCard.js';
import IDCard from './IDCard.js';

// import Gear from './Gear.js';
// import useParallaxEffect from './Parallax.js';

function Hero() {
  //useParallaxEffect(styles['parallax-bg']);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.65; // Set the playback rate to slow down the video
    }
  }, []);

  return (
    <div className={styles.hero}>
      <div className={styles['parallax-bg']}>
        <video ref={videoRef} autoPlay muted loop className={styles['video-bg']}>
          <source src="/bg-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* ID Card Component */}
      <div className={styles.idCardContainer}>
        <IDCard />
      </div>

      <div className={styles['card-grid']}>
        <ProjectCard
          title="Real-Time Chat App"
          image="/placeholder.jpg"
          description="A chat application built with WebSockets for seamless, real-time communication."
          features={['Instant Messaging', 'Group Chats', 'Real-Time Notifications']}
          techStack={['React', 'Node.js', 'Socket.IO']}
          projectSlug="online-cafe"
        />
        <ProjectCard
          title="Online Cafe"
          image="/placeholder.jpg"
          description="An online cafe with real-time inventory updates and ordering."
          features={['Online ordering system', 'Real-time inventory', 'Admin dashboard']}
          techStack={['React', 'Node.js', 'MongoDB']}
          projectSlug="online-cafe"
        />
        <ProjectCard
          title="AI Text Summarizer"
          image="/placeholder.jpg"
          description="An AI-powered tool for summarizing long-form content."
          features={['Natural Language Processing', 'API integration', 'Custom summary lengths']}
          techStack={['Python', 'TensorFlow', 'React']}
          projectSlug="online-cafe"
        />
      </div>
    </div>
  );
}

export default Hero;
