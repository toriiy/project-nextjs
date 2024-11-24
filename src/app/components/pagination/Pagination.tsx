'use client'

import React from 'react';
import {useRouter, useSearchParams} from "next/navigation";
import styles from './Pagination.module.css'

const Pagination = () => {

    const searchParams = useSearchParams();
    const router = useRouter();

    const page = searchParams.get('page') || '1';

    const incrementPage = () => {
        if (+page < 500) {
            router.push(`/?page=${Number(page) + 1}`)
        }
    }

    const decrementPage = () => {
        if (+page > 1) {
            router.push(`/?page=${Number(page) - 1}`)
        }
    }
    return (
        <div className={styles.paginationDiv}>
            <button onClick={decrementPage} className={styles.paginationButton}>Previous page</button>
            <button onClick={incrementPage} className={styles.paginationButton}>Next page</button>
        </div>
    );
};

export default Pagination;