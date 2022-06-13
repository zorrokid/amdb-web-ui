import { useEffect, useState } from "react";
import { Movie } from "../models/Movie";
import { getMovies } from "../services/moviesService";
import Filters from "./Filters";
import ListMovie from "./ListMovie";

export default function Movies() {
    const [movies, setMovies] = useState<Movie[]>([]);

    const submit = async () => {
        const movies = await getMovies();
        setMovies(movies);
    }

    return (
        <>
            <Filters submit={submit}/>
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