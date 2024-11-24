'use client'

import React, {useState} from 'react';
import styles from './Search.module.css'
import {useForm} from "react-hook-form";
import {IForm} from "@/app/models/IForm";
import {apiService} from "@/app/services/api.service";
import {IMovie} from "@/app/models/IMovie";
import SearchedMovies from "@/app/components/searched-movies/SearchedMovies";

const Search = () => {

    const {register, handleSubmit} = useForm<IForm>();

    const [searchMovies, setSearchMovies] = useState<IMovie[]>([]);

    const customHandler = async (formData: IForm) => {
        const movies = await apiService.movieService.getSearchMovie(formData);
        setSearchMovies(movies)
    }

    return (
        <div>
            <form onChange={handleSubmit(customHandler)} className={styles.searchForm}>
                <input type="text" placeholder={'Enter movie name'} {...register('movieName')}
                       className={styles.searchInput}/>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEJ0o26E6mxQKb9HrethmcNa3ekSqAp42FIQ&s"
                    alt="search icon" className={styles.searchIcon}/>
            </form>

            {searchMovies.length ?
                <SearchedMovies movies={searchMovies}/>
                : <></>}
        </div>
    );
};

export default Search;