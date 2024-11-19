import React from 'react';
import styles from './UserInfo.module.css'

const UserInfo = () => {
    return (
        <div className={styles.userDiv}>
            <img
                src="https://reallygooddesigns.com/wp-content/uploads/2021/06/Cute-Smiling-Female-Character-Design-Concept-1024x722.jpg"
                alt="girl" className={styles.image}/>
            <p>emily_smiith</p>
        </div>
    );
};

export default UserInfo;