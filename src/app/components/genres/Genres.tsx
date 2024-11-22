import React from 'react';
import {apiService} from "@/app/services/api.service";
import GenreBadge from "@/app/components/genre-badge/GenreBadge";
import styles from './Genres.module.css'


const Genres = async () => {
    const genres = await apiService.genreService.getGenres();
    return (
        <div className={styles.block}>
            {genres.map(genre => <GenreBadge genre={genre} key={genre.id}/>)}
        </div>
    );
};

export default Genres;