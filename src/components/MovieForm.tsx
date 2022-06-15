import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getMovie } from "../services/moviesService";
import MovieEditForm from "./MovieEditForm";
import Spinner from "./Spinner";

export default function MovieForm() {
    const { id } = useParams();
    const { isLoading, error, data } = useQuery(['movie', id], () => getMovie(id))

    if (isLoading) return <Spinner />;
    if (error) throw error;
    if (!data) return <></>;

    return <MovieEditForm movie={data} />
}