import React, {FC} from 'react';
import PosterPreview from "@/app/components/poster-preview/PosterPreview";
import MovieInfo from "@/app/components/movie-info/MovieInfo";
import {apiService} from "@/app/services/api.service";
import styles from './MoviesListCard.module.css'

type PropsType = {
    id: string
}
const MoviesListCard: FC<PropsType> = async ({id}) => {
    const movie = await apiService.movieService.getMovieById(id);
    return (
        <div className={styles.flex}>
            <PosterPreview poster_path={movie.poster_path} title={movie.title}/>
            <div>
                <MovieInfo movie={movie} id={id}/>
            </div>
        </div>
    );
};

export default MoviesListCard;