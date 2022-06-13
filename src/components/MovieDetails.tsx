import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Movie } from "../models/Movie";
import { getMovie } from "../services/moviesService";

type MovieState = Movie | undefined;

export default function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState<Movie | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (!id) return;
        const getResult = async () => {
            const m = await getMovie(parseInt(id));
            setMovie(m);
        }
        getResult();
    }, []);

    if (!movie) return <></>;

    return (
        <section>
            <button onClick={() => navigate(-1)}>Back</button>
            <h2>{movie.OriginalTitle}</h2>
            <p>id: {movie.id}</p>
        </section>
    );
}