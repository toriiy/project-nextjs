import React from 'react';
import {getMovies} from "@/app/services/api.service";

const MoviesPage = async () => {
    const movies = await getMovies();
    return (
        <div>
            MoviesPage
        </div>
    );
};

export default MoviesPage;
