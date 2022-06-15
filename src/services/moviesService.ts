import { IAddMovie, Movie } from "../models/Movie";

export interface MoviesFilter {
    start?: number;
    end?: number;
    limit?: number;
    name?: string;
}

export async function getMovies(filter: MoviesFilter): Promise<Movie[]> {
    let uri = 'http://localhost:3000/movies';
    let filters = [];
    if (filter?.start) filters.push(`_start=${filter.start}`);
    if (filter?.end) filters.push(`_end=${filter.end}`);
    if (filter?.limit) filters.push(`_limit=${filter.limit}`);
    if (filter?.name) filters.push(`q=${filter.name}`);
    if (filters.length > 0) uri = `${uri}?${filters.join("&")}`;

    const response = await fetch(uri);
    if (!response.ok) {
        throw new Error("Failed fetching movies result.");
    }
    return response.json();
}


export async function getMovie(id: string | undefined): Promise<Movie> {
    const response = await fetch(`http://localhost:3000/movies/${id}`);
    if (!response.ok) {
        throw new Error(`Failed fetching movie with id ${id}.`);
    }
    return response.json();
}

export async function addMovie(movie: IAddMovie) {
    const response = await fetch('http://localhost:3000/movies', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(movie)
    });

    if (!response.ok) {
        throw new Error("Failed adding movie.");
    }
}

export async function updateMovie(movie: Movie) {
    const response = await fetch(`http://localhost:3000/movies/${movie.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(movie)
    });

    if (!response.ok) {
        throw new Error("Failed adding movie.");
    }
}