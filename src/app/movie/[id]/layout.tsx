import {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: 'Movie Info'
}

type Props = { children: React.ReactNode }
const MoviesLayout = ({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default MoviesLayout;