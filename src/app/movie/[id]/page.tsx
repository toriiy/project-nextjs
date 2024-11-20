import React, {FC} from 'react';
import {apiService} from "@/app/services/api.service";
import PosterPreview from "@/app/components/poster-preview/PosterPreview";
import MovieInfo from "@/app/components/movie-info/MovieInfo";

type Params = Promise<{ id: string }>
type MyParams = {
    params: Params
}
const MoviePage: FC<MyParams> = async ({params}) => {
    const {id} = await params;
    const movie = await apiService.movieService.getMovieById(id);
    return (
        <div>
            <PosterPreview poster_path={movie.poster_path} title={movie.title}/>
            <MovieInfo movie={movie}/>
        </div>
    );
};

export default MoviePage;