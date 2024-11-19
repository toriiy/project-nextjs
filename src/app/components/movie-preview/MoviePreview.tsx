import React, {FC} from 'react';
import {IMovie} from "@/app/modules/IMovie";

type PropsType = {
    movie: IMovie
}
const MoviePreview: FC<PropsType> = ({movie}) => {

    return (
        <div>
            {/*<img src={movie.poster_path} alt={movie.title}/>*/}
            <h3>{movie.title}</h3>
        </div>
    );
};

export default MoviePreview;