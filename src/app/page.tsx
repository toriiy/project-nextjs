import React from 'react';
import {apiService} from "@/app/services/api.service";
import HomeMovie from "@/app/components/home-movie/HomeMovie";
import MoviesList from "@/app/components/movies-list/MoviesList";
import styles from './page.module.css'

const MoviesPage = async () => {
    const movies = await apiService.movieService.getMovies();
    return (
        <div>
            <div className={styles.center}>
                <HomeMovie/>
            </div>
            <div className={styles.pageDiv}>
                <MoviesList movies={movies}/>
            </div>
        </div>
    );
};

export default MoviesPage;
