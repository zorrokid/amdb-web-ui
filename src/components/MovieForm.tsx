import { ChangeEvent } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getMovie } from "../services/moviesService";
import Spinner from "./Spinner";

export default function MovieForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { isLoading, error, data } = useQuery(`movie-details-${id}`, () => getMovie(id))

    if (isLoading) return <Spinner />;
    if (error) throw error;
    if (!data) return <></>;

    const submit = () => {
        console.log("Submit");
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.id);
        console.log(e.target.value);
    }

    return (
        <>
            <button onClick={() => navigate(-1)}>Back</button>
            <button onClick={() => submit()}>Save changes</button>
            <h1>Edit</h1>
            <div className="grid">
                <div className="grid__item--header">
                    Original title
                </div>
                <div className="grid__item">
                    <input type="text" value={data.originalTitle} onChange={handleChange} />
                </div>
                <div className="grid__item--header">
                    Director
                </div>
                <div className="grid__item">
                    <input type="text" value={data.director} onChange={handleChange} />
                </div>
                <div className="grid__item--header">
                    IMDB
                </div>
                <div className="grid__item">
                    <input type="text" value={data.imdb} onChange={handleChange} />
                </div>
                <div className="grid__item--header">
                    Production type
                </div>
                <div className="grid__item">
                    <input type="text" value={data.productiohType} onChange={handleChange} />
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