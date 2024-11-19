import {IHomeMovie} from "@/app/modules/IHomeMovie";
import {IMovie} from "@/app/modules/IMovie";

export const apiService = {
    movieService: {
        getMovies: async (): Promise<IMovie[]> => {
            const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=2667ac936a91aaef9540e05cf7c68ef5&page=1')
                .then(value => value.json());
            console.log(response.results);
            return response.results;
        },
        getHomeMovie: async (): Promise<IHomeMovie> => {
            const response = await fetch('https://api.themoviedb.org/3/movie/912649?api_key=2667ac936a91aaef9540e05cf7c68ef5')
                .then(value => value.json());
            console.log(response)
            return response
        }
    }
}


