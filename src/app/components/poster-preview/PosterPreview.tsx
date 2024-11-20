import React, {FC} from 'react';

type PropsType = {
    poster_path: string,
    title: string
}
const PosterPreview: FC<PropsType> = ({poster_path, title}) => {
    return (
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}/>
    );
};

export default PosterPreview;