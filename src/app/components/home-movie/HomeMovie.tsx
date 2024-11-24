import React from 'react';
import {apiService} from "@/app/services/api.service";
import styles from './HomeMovie.module.css'
import Link from "next/link";

const HomeMovie = async () => {
    const homeMovie = await apiService.movieService.getHomeMovie();
    return (
        <div className={styles.homeDiv}>
            <h2 className={styles.title}>Title: {homeMovie.title}</h2>
            <div className={styles.flex}>
                <p>Id: {homeMovie.id}</p>
                <p>Origin country: {homeMovie.origin_country[0]}</p>
            </div>
            <div className={styles.ratingDiv}>
                <p>Rating: </p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
                     alt="imdb-icon" className={styles.image}/>
                <p>Vote average: {homeMovie.vote_average}</p>
                <p>Vote count: {homeMovie.vote_count}</p>
            </div>
            <h3>Tagline: {homeMovie.tagline}</h3>
            <p>{homeMovie.overview}</p>
            <p>Release date: {homeMovie.release_date}</p>
            <p>Runtime: {homeMovie.runtime} min</p>
            <Link href={'/movie/' + homeMovie.id} className={styles.movieLink}>Open movie</Link>
        </div>
    );
};

export default HomeMovie;