import React, {FC} from 'react';
import {IMovie} from "@/app/models/IMovie";
import SearchedMovie from "@/app/components/searched-movie/SearchedMovie";
import styles from './SearchedMovies.module.css'

type PropsType = {
    movies: IMovie[]
}
const SearchedMovies: FC<PropsType> = ({movies}) => {
    return (
        <div className={styles.searchMoviesBlock}>
            {movies.map(movie => <SearchedMovie movie={movie} key={movie.id}/>)}
        </div>
    );
};

export default SearchedMovies;