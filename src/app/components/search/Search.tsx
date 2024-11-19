'use client'

import React from 'react';
import styles from './Search.module.css'
import {useForm} from "react-hook-form";
import {IForm} from "@/app/models/IForm";
import {apiService} from "@/app/services/api.service";

const Search = () => {

    const {register, handleSubmit} = useForm<IForm>();

    const customHandler = (formData: IForm) => {
        const searchMovie = apiService.movieService.getSearchMovie(formData);
    }
    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)} className={styles.searchForm}>
                <input type="text" placeholder={'enter movie name'} {...register('movieName')}
                       className={styles.searchInput}/>
                <button>
                    <img src="https://img.icons8.com/?size=100&id=132&format=png&color=000000"
                         alt="search icon" className={styles.searchIcon}/>
                </button>
            </form>
        </div>
    );
};

export default Search;