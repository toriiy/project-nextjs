import {IMovieFull} from "@/app/models/IMovieFull";
import {IForm} from "@/app/models/IForm";
import {IMovie} from "@/app/models/IMovie";
import {IGenre} from "@/app/models/IGenre";
import {IVideo} from "@/app/models/IVideo";
import {baseApiUrl, token} from "@/app/urls/urls";

export const apiService = {
    movieService: {
        getMovies: async (page: string): Promise<IMovie[]> => {
            const response = await fetch(`${baseApiUrl}/discover/movie?${token}&page=${page}`)
                .then(value => value.json());
            console.log(response.results);
            return response.results;
        },
        getMovieById: async (id: string): Promise<IMovieFull> => {
            const response = await fetch(`${baseApiUrl}/movie/${id}?${token}`)
                .then(value => value.json());
            console.log(response);
            return response;
        },
        getHomeMovie: async (): Promise<IMovieFull> => {
            const response = await fetch(`${baseApiUrl}/movie/912649?${token}`)
                .then(value => value.json());
            console.log(response);
            return response;
        },
        getSearchMovie: async (formData: IForm): Promise<IMovie[]> => {
            const response = await fetch(`${baseApiUrl}/search/movie?${token}&query=${formData.movieName}`)
                .then(value => value.json());
            console.log(response.results);
            return response.results;
        },
        getMovieVideo: async (id: string): Promise<IVideo[]> => {
            const response = await fetch(`${baseApiUrl}/movie/${id}/videos?language=en-US&${token}`)
                .then(value => value.json());
            console.log(response.results);
            return response.results;
        }
    },
    genreService: {
        getGenres: async (): Promise<IGenre[]> => {
            const response = await fetch(`${baseApiUrl}/genre/movie/list?${token}`)
                .then(value => value.json());
            console.log(response.genres);
            return response.genres;
        },
        getMoviesByGenre: async (id: string, page: string): Promise<IMovie[]> => {
            const response = await fetch(`${baseApiUrl}/discover/movie?&with_genres=${id}&${token}&page=${page}`)
                .then(value => value.json());
            console.log(response.results);
            return response.results

        }
    }
}


