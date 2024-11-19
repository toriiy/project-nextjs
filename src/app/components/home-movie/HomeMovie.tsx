import React from 'react';
import {apiService} from "@/app/services/api.service";

const HomeMovie = async () => {
    const homeMovie = await apiService.movieService.getHomeMovie();
    return (
        <div>
            <h2>Id: {homeMovie.id}</h2>
            <h2>Origin country: {homeMovie.origin_country[0]}</h2>
            <h2>Title: {homeMovie.title}</h2>
            <h3>Tagline: {homeMovie.tagline}</h3>
            <p>{homeMovie.overview}</p>
            <p>Release date: {homeMovie.release_date}</p>
            <p>Runtime: {homeMovie.runtime}</p>
            <p>Vote average {homeMovie.vote_average}</p>
            <hr/>
        </div>
    );
};

export default HomeMovie;