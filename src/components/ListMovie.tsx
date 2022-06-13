import { Link } from "react-router-dom";
import { Movie } from "../models/Movie";

export default function ListMovie({ movie }: { movie: Movie }) {
    return (
        <section>
            <h3>{movie.OriginalTitle}</h3>
            <Link to={`/movies/${movie.id}`}>See details</Link>
        </section>
    );
}