import React from 'react';
import {Rating} from "@mui/material";
import styles from './StarsRating.module.css'

const StarsRating = () => {
    return (
        <div className={styles.starRatingDiv}>
            <h3>Rate the movie:</h3>
            <Rating name="size-medium" defaultValue={4}/>
        </div>
    );
};

export default StarsRating;