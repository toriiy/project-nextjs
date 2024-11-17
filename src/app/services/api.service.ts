import {IResponse} from "@/app/modules/IResponse";

export const getMovies = async (): Promise<IResponse> => {
    const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=2667ac936a91aaef9540e05cf7c68ef5&page=1')
        .then(value => value.json());
    console.log(response.results);
    return response.results;
}