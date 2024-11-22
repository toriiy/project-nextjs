import React, {FC} from 'react';
import {IGenre} from "@/app/models/IGenre";
import Link from "next/link";

type PropsType = {
    genre: IGenre
}
const GenreBadge: FC<PropsType> = ({genre}) => {
    return (
        <div>
            <h3>Id: {genre.id}</h3>
            <p>
                <Link href={'/genres/genre/' + genre.id}>Name: {genre.name}</Link>
            </p>
        </div>
    );
};

export default GenreBadge;