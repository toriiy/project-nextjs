import {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: 'Movies By Genre'
}

type Props = { children: React.ReactNode }
const MoviesByGenreLayout = ({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default MoviesByGenreLayout;