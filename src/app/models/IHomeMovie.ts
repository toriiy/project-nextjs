export interface IHomeMovie {
    adult: boolean,
    backdrop_path: string,

    budget: number,
    genres: [
        {
            id: number,
            name: string
        },
        {
            id: number,
            name: string
        },
        {
            id: number,
            name: string
        }
    ],
    id: number,
    origin_country: string[],
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    runtime: number,
    status: string,
    tagline: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}