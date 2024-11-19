import React, {FC} from 'react';
import {IMovie} from "@/app/modules/IMovie";
import MoviePreview from "@/app/components/movie-preview/MoviePreview";

type PropsType = {
    movies: IMovie[]
}
const MoviesList: FC<PropsType> = ({movies}) => {
    return (
        <div>
            {movies.map(movie => <MoviePreview movie={movie} key={movie.id}/>)}
        </div>
    );
};

export default MoviesList;