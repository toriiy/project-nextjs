import React, {FC} from 'react';
import {IVideo} from "@/app/models/IVideo";
import styles from './MovieTrailer.module.css'

type PropsType = {
    trailer: IVideo | undefined
}
const MovieTrailer: FC<PropsType> = ({trailer}) => {
    const baseTrailerURL = 'https://www.youtube.com/embed/'
    const currentVideoUrl = baseTrailerURL + trailer?.key
    return (
        <div className={styles.trailer}>
            <iframe width="560" height="315" src={currentVideoUrl}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    );
};

export default MovieTrailer;