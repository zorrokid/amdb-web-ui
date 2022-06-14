import { ChangeEvent, MouseEvent, useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { Movie } from "../models/Movie";
import { addMovie } from "../services/moviesService";
import Spinner from "./Spinner";

const emptyMovie: Movie = {
    director: "",
    id: 0,
    imdb: "",
    originalTitle: "",
    productiohType: "",
    year: 0
}

export default function AddMovieForm() {
    const [movie, setMovie] = useState<Movie>(emptyMovie);
    const navigate = useNavigate();
    const addMovieMutation = useMutation((newMovie: Movie) => addMovie(newMovie));

    const submit = (event: MouseEvent) => {
        event.preventDefault();
        addMovieMutation.mutate(movie);
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMovie((currMovie) => {
            return {
                ...currMovie,
                [e.target.id]: e.target.value
            }
        });
    }

    if (addMovieMutation.isLoading) {
        return <Spinner />;
    }

    if (addMovieMutation.error) {
        throw addMovieMutation.error;
    }

    if (addMovieMutation.isSuccess) {
        return <>Added movie.</>;
    }

    return (
        <>
            <button onClick={() => navigate(-1)}>Back</button>
            <button onClick={submit}>Save changes</button>
            <h1>Add movie</h1>
            <div className="grid">
                <div className="grid__item--header">
                    Original title
                </div>
                <div className="grid__item">
                    <input type="text" value={movie?.originalTitle} onChange={handleChange} id="originalTitle" />
                </div>
                <div className="grid__item--header">
                    Director
                </div>
                <div className="grid__item">
                    <input type="text" value={movie?.director} onChange={handleChange} id="director" />
                </div>
                <div className="grid__item--header">
                    IMDB
                </div>
                <div className="grid__item">
                    <input type="text" value={movie?.imdb} onChange={handleChange} id="imdb" />
                </div>
                <div className="grid__item--header">
                    Production type
                </div>
                <div className="grid__item">
                    <input type="text" value={movie?.productiohType} onChange={handleChange} id="productiohType" />
                </div>
            </div>
        </>
    );
}