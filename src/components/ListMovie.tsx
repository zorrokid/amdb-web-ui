import { Link } from "react-router-dom";
import { Movie } from "../models/Movie";

export default function ListMovie({ movie }: { movie: Movie }) {
    return (
        <section className="card">
            <h4>{movie.originalTitle}</h4>
            <section>
                <Link to={`/movies/${movie.id}`}>See details</Link>
            </section>
        </section>
    );
}