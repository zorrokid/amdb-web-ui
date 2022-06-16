import { IAddMovie, Movie } from "../features/movies/Movie";

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