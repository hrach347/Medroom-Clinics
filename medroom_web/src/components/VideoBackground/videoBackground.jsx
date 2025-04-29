import React from 'react';
import styles from './videoBackground.module.css'

const VideoBackground = () => {
    return (
        <video 
            className={styles.bgVideo}
            autoPlay 
            muted 
            loop 
            style={styles.video}
        >
            <source src='/Assets/Videos/header3.mp4'type="video/mp4" />
            Your browser does not support the video tag.
        </video>  
    );
};

export default VideoBackground;