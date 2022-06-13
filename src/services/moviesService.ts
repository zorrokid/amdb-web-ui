import { Movie } from "../models/Movie";

export async function getMovies(): Promise<Movie[]> {
    return fetch('http://localhost:3000/movies')
        .then((response: Response) => {
            if (response.ok) return response.json();
            throw response;
        });
}