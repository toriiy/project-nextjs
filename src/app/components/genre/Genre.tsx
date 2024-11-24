import React, {FC} from 'react';
import {IGenre} from "@/app/models/IGenre";
import Link from "next/link";
import styles from './Genre.module.css'

type PropsType = {
    genre: IGenre
}
const Genre: FC<PropsType> = ({genre}) => {
    return (
        <div className={styles.fontSize}>
            <h3>Id: {genre.id}</h3>
            <p className={styles.margin}>
                <Link href={'/genres/genre/' + genre.id} className={styles.genreLink}>
                    Name: {genre.name}</Link>
            </p>
        </div>
    );
};

export default Genre;