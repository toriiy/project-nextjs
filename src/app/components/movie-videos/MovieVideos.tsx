import React, {FC} from 'react';
import {apiService} from "@/app/services/api.service";
import MovieTrailer from "@/app/components/movie-trailer/MovieTrailer";

type PropsType = {
    id: string
}
const MovieVideos: FC<PropsType> = async ({id}) => {
    const videos = await apiService.movieService.getMovieVideo(id);
    const trailer = videos.find(video => video.type === 'Trailer');
    console.log(trailer)
    return (
        <div>
            <MovieTrailer trailer={trailer}/>
        </div>
    );
};

export default MovieVideos;