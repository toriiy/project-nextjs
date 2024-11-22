import React from 'react';
import Genres from "@/app/components/genres/Genres";
import styles from './page.module.css'

const GenresPage = () => {
    return (
        <div className={styles.background}>
            <Genres/>
        </div>
    );
};

export default GenresPage;