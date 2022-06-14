import { ChangeEvent, MouseEvent, useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { IAddMovie, Movie } from "../models/Movie";
import { addMovie } from "../services/moviesService";
import Spinner from "./Spinner";
import { useForm, SubmitHandler } from "react-hook-form";

const emptyMovie: Movie = {
    director: "",
    id: 0,
    imdb: "",
    originalTitle: "",
    productiohType: "",
    year: 0
}

export default function AddMovieForm() {
    const { register, handleSubmit } = useForm<IAddMovie>();
    const [movie, setMovie] = useState<Movie>(emptyMovie);
    const navigate = useNavigate();
    const addMovieMutation = useMutation((newMovie: IAddMovie) => addMovie(newMovie));

    const onSubmit: SubmitHandler<IAddMovie> = data => {
        console.log(data);
        addMovieMutation.mutate(data);
    }

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
            <button onClick={handleSubmit(onSubmit)}>Save changes</button>
            <h1>Add movie</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid">
                    <div className="grid__item--header">
                        Original title
                    </div>
                    <div className="grid__item">
                        <input {...register("originalTitle", { required: true })} />
                    </div>
                    <div className="grid__item--header">
                        Director
                    </div>
                    <div className="grid__item">
                        <input {...register("director")} />
                    </div>
                    <div className="grid__item--header">
                        IMDB
                    </div>
                    <div className="grid__item">
                        <input {...register("imdb")} />
                    </div>
                    <div className="grid__item--header">
                        Production type
                    </div>
                    <div className="grid__item">
                        <input {...register("productiohType", { required: true })} />
                    </div>
                    <div className="grid__item--header"></div>
                    <div className="grid__item">
                        <input type="submit" />
                    </div>
                </div>
            </form>
        </>
    );
}