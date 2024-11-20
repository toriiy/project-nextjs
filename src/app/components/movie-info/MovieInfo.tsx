import React, {FC} from 'react';
import {IMovieFull} from "@/app/models/IMovieFull";
import ProductionCompany from "@/app/components/production-company/ProductionCompany";
import ProductionCountry from "@/app/components/production-country/ProductionCountry";

type PropsType = {
    movie: IMovieFull
}
const MovieInfo: FC<PropsType> = ({movie}) => {
    return (
        <div>
            <h2>Id: {movie.id}</h2>
            <p>Budget: {movie.budget}$</p>
            <p>Original language: {movie.original_language}</p>
            <p>Title: {movie.title} / <i>{movie.original_title}</i></p>
            <p>Tagline: {movie.tagline}</p>
            <p>Overview: {movie.overview}</p>
            <p>Popularity: {movie.popularity}</p>
            <p>Release date: {movie.release_date}</p>
            <p>Runtime: {movie.runtime} min</p>
            <p>Status: {movie.status}</p>
            <div>
                <h3>Production companies:</h3>
                <div>{movie.production_companies.map(company =>
                    <ProductionCompany key={company.id} company={company}/>)}</div>
            </div>
            <div>
                <h3>Production countries:</h3>
                <div>{movie.production_countries.map(country =>
                    <ProductionCountry country={country} key={country.iso_3166_1}/>)}</div>
            </div>
        </div>
    );
};

export default MovieInfo;