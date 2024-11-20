import {IMovieFull} from "@/app/models/IMovieFull";
import {IForm} from "@/app/models/IForm";
import {IMovie} from "@/app/models/IMovie";

export const apiService = {
    movieService: {
        getMovies: async (): Promise<IMovie[]> => {
            const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=2667ac936a91aaef9540e05cf7c68ef5&page=1')
                .then(value => value.json());
            console.log(response.results);
            return response.results;
        },
        getMovieById: async (id: string): Promise<IMovieFull> => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=2667ac936a91aaef9540e05cf7c68ef5`)
                .then(value => value.json());
            console.log(response);
            return response;
        },
        getHomeMovie: async (): Promise<IMovieFull> => {
            const response = await fetch('https://api.themoviedb.org/3/movie/912649?api_key=2667ac936a91aaef9540e05cf7c68ef5')
                .then(value => value.json());
            console.log(response);
            return response;
        },
        getSearchMovie: async (formData: IForm): Promise<IMovie[]> => {
            const response = await fetch('https://api.themoviedb.org/3/search/movie?api_key=2667ac936a91aaef9540e05cf7c68ef5&page=1&query=' + formData.movieName)
                .then(value => value.json());
            console.log(response.results);
            return response.results;
        }
    }
}


