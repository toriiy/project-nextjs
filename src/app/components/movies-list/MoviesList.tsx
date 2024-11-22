import React, {FC} from 'react';
import MoviePreview from "@/app/components/movie-preview/MoviePreview";
import {IMovie} from "@/app/models/IMovie";
import styles from './MoviesList.module.css'

type PropsType = {
    movies: IMovie[]
}
const MoviesList: FC<PropsType> = ({movies}) => {
    return (
        <div className={styles.gridBlock}>
            {movies.map(movie => <MoviePreview movie={movie} key={movie.id}/>)}
        </div>
    );
};

export default MoviesList;