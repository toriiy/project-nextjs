import React from 'react';
import {apiService} from "@/app/services/api.service";
import HomeMovie from "@/app/components/home-movie/HomeMovie";
import MoviesList from "@/app/components/movies-list/MoviesList";

const MoviesPage = async () => {
    const movies = await apiService.movieService.getMovies();
    return (
        <div>
            <HomeMovie/>
            <MoviesList movies={movies}/>
        </div>
    );
};

export default MoviesPage;
