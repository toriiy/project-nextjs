import React from 'react';
import {apiService} from "@/app/services/api.service";
import Genre from "@/app/components/genre/Genre";
import styles from './Genres.module.css'


const Genres = async () => {
    const genres = await apiService.genreService.getGenres();
    return (
        <div className={styles.block}>
            {genres.map(genre => <Genre genre={genre} key={genre.id}/>)}
        </div>
    );
};

export default Genres;