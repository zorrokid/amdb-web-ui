import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MoviesFilter, useGetMoviesQuery } from "../features/movies/movieService";
import { Movie } from "../models/Movie";
import Filters from "./Filters";
import ListMovie from "./ListMovie";
import Spinner from "./Spinner";

export default function Movies() {
    const navigate = useNavigate();
    const [filter, setFilter] = useState<MoviesFilter>({ start: 1, end: 50 });
    const { data, error, isLoading } = useGetMoviesQuery(filter);
    const updateFilter = (filter: MoviesFilter) => setFilter(filter);

    if (isLoading) return <Spinner />;
    if (error) throw error;
    if (!data) return <></>;

    return (
        <>
            <Filters filter={filter} updateFilter={updateFilter} />
            <h2>Movies</h2>
            <button onClick={() => navigate("add")}>Add movie</button>
            <section className="container">
                {
                    data
                        ? data.map((movie: Movie, index: number) => <ListMovie key={index} movie={movie} />)
                        : null
                }
            </section>
        </>
    );
}