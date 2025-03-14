import React from 'react';
import background from "../../Assets/Videos/header3.mp4";
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
            <source src={background} type="video/mp4" />
            Your browser does not support the video tag.
        </video>  
    );
};

export default VideoBackground;