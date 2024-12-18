import React, {FC} from 'react';
import {IMovieFull} from "@/app/models/IMovieFull";
import ProductionCompany from "@/app/components/production-company/ProductionCompany";
import ProductionCountry from "@/app/components/production-country/ProductionCountry";
import SpokenLanguage from "@/app/components/spoken-language/SpokenLanguage";
import Genre from "@/app/components/genre/Genre";
import styles from './MovieInfo.module.css'
import MovieVideos from "@/app/components/movie-videos/MovieVideos";
import Rating from "@/app/components/rating/Rating";
import StarsRating from "@/app/components/stars-rating/StarsRating";

type PropsType = {
    movie: IMovieFull
    id: string
}
const MovieInfo: FC<PropsType> = ({movie, id}) => {
        return (
            <div className={styles.block}>
                <h2 className={styles.title}>Title: {movie.title} / <i>{movie.original_title}</i></h2>
                <Rating movie={movie}/>
                <StarsRating/>
                <p>Tagline: {movie.tagline}</p>
                <p>Overview: {movie.overview}</p>
                <div className={styles.flex}>
                    <div className={styles.infoBlock}>
                        <p>Id: {movie.id}</p>
                        <p>Budget: {movie.budget}$</p>
                        <p>Original language: {movie.original_language}</p>
                        <div className={styles.genresBlock}>
                            <hr/>
                            <h3>Genres:</h3>
                            <div>{movie.genres.map(genre =>
                                <Genre genre={genre} key={genre.id}/>)}</div>
                            <hr/>
                        </div>
                        <p>Popularity: {movie.popularity}</p>
                        <p>Release date: {movie.release_date}</p>
                        <p>Runtime: {movie.runtime} min</p>
                        <p>Status: {movie.status}</p>
                        <div className={styles.infoBlock}>
                            <h3>Spoken languages:</h3>
                            <div>{movie.spoken_languages.map(language =>
                                <SpokenLanguage language={language} key={language.iso_639_1}/>)}</div>
                        </div>
                    </div>
                    <div>
                        <h3>Trailer: </h3>
                        <MovieVideos id={id}/>
                    </div>
                </div>
                {movie.production_companies.length ?
                    <div>
                        < h3> Production companies:</h3>
                        <div className={styles.grid}>{movie.production_companies.map(company =>
                            <ProductionCompany key={company.id} company={company}/>)}</div>
                    </div>
                    : <></>}
                {movie.production_countries.length ?
                    <div className={styles.infoBlock}>
                        <h3>Production countries:</h3>
                        <div>{movie.production_countries.map(country =>
                            <ProductionCountry country={country} key={country.iso_3166_1}/>)}</div>
                    </div>
                    : <></>}
            </div>
        )
            ;
    }
;

export default MovieInfo;