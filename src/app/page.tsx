import React, {FC} from 'react';
import {apiService} from "@/app/services/api.service";
import HomeMovie from "@/app/components/home-movie/HomeMovie";
import MoviesList from "@/app/components/movies-list/MoviesList";
import styles from './page.module.css'
import Pagination from "@/app/components/pagination/Pagination";

type SearchParams = Promise<{ page?: string }>
type MyProps = {
    searchParams: SearchParams
}
const MoviesPage: FC<MyProps> = async ({searchParams}) => {
    const {page} = await searchParams;
    const movies = await apiService.movieService.getMovies(page || '1');

    return (
        <div>
            <div className={styles.center}>
                <HomeMovie/>
            </div>
            <div className={styles.pageDiv}>
                <MoviesList movies={movies}/>
                <Pagination/>
            </div>
        </div>
    );
};

export default MoviesPage;
