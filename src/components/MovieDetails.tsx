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
        <>
            <button onClick={() => navigate(-1)}>Back</button>
            <div className="grid">
                <div className="grid__item--header">
                    Original title
                </div>
                <div className="grid__item">
                    <h2>{data.originalTitle}</h2>
                </div>
                <div className="grid__item--header">
                    Director
                </div>
                <div className="grid__item">
                    {data.director}
                </div>
                <div className="grid__item--header">
                    IMDB
                </div>
                <div className="grid__item">
                    <p><a href={`https://www.imdb.com/title/${data.imdb}`}>IMDB</a></p>
                </div>
                <div className="grid__item--header">
                    Production type
                </div>
                <div className="grid__item">
                    {data.productiohType}
                </div>
                <div className="grid__item--header">
                    ID
                </div>
                <div className="grid__item">
                    {data.id}
                </div>
            </div>
        </>
    );
}