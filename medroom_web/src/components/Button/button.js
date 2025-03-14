import React from 'react';
import styles from './button.module.css'
const Button = ({ content }) => {
    return (
        <button className={styles.btn}>
            {content}
        </button>
    );
};

export default Button;