import React, {FC} from 'react';
import {apiService} from "@/app/services/api.service";
import MoviePreview from "@/app/components/movie-preview/MoviePreview";
import styles from './page.module.css'

type Params = Promise<{ id: string }>
type MyParams = {
    params: Params
}
const GenrePage: FC<MyParams> = async ({params}) => {
    const {id} = await params;
    const movies = await apiService.genreService.getMoviesByGenre(id);
    return (
        <div className={styles.gridBlock}>
            {movies.map(movie => <MoviePreview movie={movie} key={movie.id}/>)}
        </div>
    );
};

export default GenrePage;