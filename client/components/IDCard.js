import React from 'react';
import Typewriter from './Typewriter.js';
import styles from '../styles/IDCard.module.css';

function IDCard() {
    return (
        <div className={styles.idCard}>
            {/* Profile Picture */}
            <div className={styles.profilePicContainer}>
                <img src="/headshot.jpg" alt="Profile" className={styles.profilePic} />
            </div>

            {/* Biographical Information */}
            <div className={styles.info}>
                {/* Name & Title at the Top */}
                <div className={styles.header}>
                    <div className={styles.intro}>
                        <h2>Aysha Amreen</h2>
                        <p className={styles.title}>
                            <Typewriter words={['Software Engineer', 'Web Developer', 'Problem Solver']} />
                        </p>
                    </div>

                    {/* View Resume Button */}
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.resumeButton}>
                        View Resume
                    </a>
                </div>

                {/* Information in Two Columns */}
                <div className={styles.infoGrid}>
                    <div className={styles.column}>
                        <p><strong>Email:</strong> aysha@example.com</p>
                        <p><strong>Location:</strong> Texas, USA</p>
                    </div>

                    <div className={styles.divider}></div> {/* Gold Line Divider */}

                    <div className={styles.column}>
                        <p><strong>Specialties:</strong> Full Stack Development, Machine Learning, AI</p>
                        <p><strong>Tech Stack:</strong> React, Node.js, MongoDB, AWS, Python</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IDCard;
