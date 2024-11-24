import React, {FC} from 'react';
import {IMovie} from "@/app/models/IMovie";
import styles from './SearchedMovie.module.css'

type PropsType = {
    movie: IMovie
}
const SearchedMovie: FC<PropsType> = ({movie}) => {

    const openMovie = () => {
        location.href = '/movie/' + movie.id
    }
    return (
        <div className={styles.movieDiv}>
            <button onClick={openMovie} className={styles.movieButton}>{movie.title}</button>
        </div>
    );
};

export default SearchedMovie;