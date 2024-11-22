import React from 'react';
import {apiService} from "@/app/services/api.service";
import styles from './HomeMovie.module.css'

const HomeMovie = async () => {
    const homeMovie = await apiService.movieService.getHomeMovie();
    return (
        <div className={styles.homeDiv}>
            <h2 className={styles.title}>Title: {homeMovie.title}</h2>
            <div className={styles.flex}>
                <p>Id: {homeMovie.id}</p>
                <p>Origin country: {homeMovie.origin_country[0]}</p>
            </div>
            <h3>Tagline: {homeMovie.tagline}</h3>
            <p>{homeMovie.overview}</p>
            <p>Release date: {homeMovie.release_date}</p>
            <p>Runtime: {homeMovie.runtime}</p>
            <p>Vote average: {homeMovie.vote_average}</p>
        </div>
    );
};

export default HomeMovie;