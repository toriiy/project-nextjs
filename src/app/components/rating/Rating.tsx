import React, {FC} from 'react';
import {IMovieFull} from "@/app/models/IMovieFull";
import styles from './Rating.module.css'

type PropsType = {
    movie: IMovieFull
}
const Rating: FC<PropsType> = ({movie}) => {

    return (
        <div className={styles.ratingBlock}>
            <p>Rating: </p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
                 alt="imdb-icon" className={styles.ratingImg}/>
            <p>Vote average: {movie.vote_average}</p>
            <p>Vote count: {movie.vote_count}</p>
        </div>
    );
};

export default Rating;