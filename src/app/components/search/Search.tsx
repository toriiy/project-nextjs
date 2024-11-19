'use client'

import React from 'react';
import styles from './Search.module.css'

const Search = () => {

    return (
        <form action="" className={styles.searchForm}>
            <input type="text" placeholder={'enter movie name'} className={styles.searchInput}/>
            <button>
                <img src="https://img.icons8.com/?size=100&id=132&format=png&color=000000"
                     alt="search icon" className={styles.searchIcon}/>
            </button>
        </form>
    );
};

export default Search;