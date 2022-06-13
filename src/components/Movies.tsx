import { useEffect, useState } from "react";
import { Movie } from "../models/Movie";
import { getMovies } from "../services/moviesService";

export default function Movies() {
    const initialState: Movie[] = [];
    const [movies, setMovies] = useState(initialState);


    useEffect(() => {

        const getResult = async () => {
            const movies = await getMovies();
            setMovies(movies);
        }

        getResult();
    }, []);

    return (
        <>
            <h2>Movies</h2>
            <ul>
                {
                    movies ? <ul>{
                        movies.map((movie: Movie, index: number) =>
                            <li key={index}>{movie.OriginalTitle}</li>)
                    }</ul> : null
                }
            </ul>
        </>
    );
}