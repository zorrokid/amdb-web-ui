import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getMovie } from "../services/moviesService";
import Spinner from "./Spinner";

export default function MovieDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { isLoading, error, data } = useQuery(`movie-details-${id}`, () => getMovie(id))

    if (isLoading) return <Spinner />;
    if (error) throw error;
    if (!data) return <></>;

    return (
        <section>
            <button onClick={() => navigate(-1)}>Back</button>
            <h2>{data.originalTitle}</h2>
            <p>id: {data.id}</p>
        </section>
    );
}