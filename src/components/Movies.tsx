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
            <section>
            {
                movies 
                ? movies.map((movie: Movie, index: number) => <ListMovie movie={movie} />) 
                : null
            }
            </section>
        </>
    );
}