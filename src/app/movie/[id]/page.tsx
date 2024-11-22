import React, {FC} from 'react';
import MoviesListCard from "@/app/components/movies-list-card/MoviesListCard";
import styles from './page.module.css'

type Params = Promise<{ id: string }>
type MyParams = {
    params: Params
}
const MoviePage: FC<MyParams> = async ({params}) => {
    const {id} = await params;
    return (
        <div className={styles.background}>
            <MoviesListCard id={id}/>
        </div>
    );
};

export default MoviePage;