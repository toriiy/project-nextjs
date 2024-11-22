import React, {FC} from 'react';
import styles from './PosterPreview.module.css'

type PropsType = {
    poster_path: string,
    title: string
}
const PosterPreview: FC<PropsType> = ({poster_path, title}) => {
    return (
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} className={styles.image}/>
    );
};

export default PosterPreview;