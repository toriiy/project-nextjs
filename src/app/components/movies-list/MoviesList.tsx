import React, {FC} from 'react';
import MoviePreview from "@/app/components/movie-preview/MoviePreview";
import {IMovie} from "@/app/models/IMovie";

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