export interface IMovieFull {
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection: {
        id: number,
        name: string,
        poster_path: string,
        backdrop_path: string
    },
    budget: number,
    genres: IGenre[],
    homepage: string,
    id: number,
    imdb_id: string
    origin_country: string[],
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies: IProdCompany[],
    production_countries: IProdCountry[],
    release_date: string,
    runtime: number,
    spoken_languages: ISpokenLanguage[],
    status: string,
    tagline: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

interface IGenre {
    id: number,
    name: string
}

export interface IProdCompany {
    id: number,
    logo_path: string,
    name: string,
    origin_country: string
}

export interface IProdCountry {
    iso_3166_1: string,
    name: string
}

interface ISpokenLanguage {
    english_name: string,
    iso_639_1: string,
    name: string
}