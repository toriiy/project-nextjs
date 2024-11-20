import React, {FC} from 'react';
import Link from "next/link";
import PosterPreview from "@/app/components/poster-preview/PosterPreview";
import {IMovie} from "@/app/models/IMovie";

type PropsType = {
    movie: IMovie
}
const MoviePreview: FC<PropsType> = ({movie}) => {

    return (
        <div>
            <PosterPreview title={movie.title} poster_path={movie.poster_path}/>
            <h3>
                <Link href={'/movie/' + movie.id}>{movie.title}</Link>
            </h3>
        </div>
    );
};

export default MoviePreview;