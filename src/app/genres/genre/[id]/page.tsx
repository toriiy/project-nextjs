import React, {FC} from 'react';
import {apiService} from "@/app/services/api.service";
import MoviePreview from "@/app/components/movie-preview/MoviePreview";
import styles from './page.module.css'
import Pagination from "@/app/components/pagination/Pagination";

type Params = Promise<{ id: string }>
type SearchParams = Promise<{ page?: string }>
type MyParams = {
    params: Params,
    searchParams: SearchParams
}
const GenrePage: FC<MyParams> = async ({params, searchParams}) => {
    const {page} = await searchParams;
    const {id} = await params;
    const movies = await apiService.genreService.getMoviesByGenre(id, page || '1');
    return (
        <div className={styles.pageBlock}>
            <div className={styles.gridBlock}>{movies.map(movie => <MoviePreview movie={movie} key={movie.id}/>)}</div>
            <Pagination baseUrl={'/genres/genre/' + id}/>
        </div>
    );
};

export default GenrePage;