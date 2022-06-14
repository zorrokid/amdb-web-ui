import { Movie } from "../models/Movie";

export interface MoviesFilter {
    start?: number;
    end?: number;
    limit?: number;
}

export async function getMovies(filter: MoviesFilter): Promise<Movie[]> {
    let uri = 'http://localhost:3000/movies';
    let filters = [];
    if (filter?.start) filters.push(`_start=${filter.start}`);
    if (filter?.end) filters.push(`_end=${filter.end}`);
    if (filter?.limit) filters.push(`_limit=${filter.limit}`);
    if (filters.length > 0) uri = `${uri}?${filters.join("&")}`;

    return fetch(uri)
        .then((response: Response) => {
            if (response.ok) return response.json();
            throw response;
        });
}


export async function getMovie(id: string | undefined): Promise<Movie> {
    return fetch(`http://localhost:3000/movies/${id}`)
        .then((response: Response) => response.json());
}