import { useEffect, useState } from "react";
import { Movie } from "../models/Movie";
import { getMovies } from "../services/moviesService";
import ListMovie from "./ListMovie";

export default function Movies() {
    const [movies, setMovies] = useState<Movie[]>([]);

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
                            <li key={index}><ListMovie movie={movie} /></li>)
                    }</ul> : null
                }
            </ul>
        </>
    );
}