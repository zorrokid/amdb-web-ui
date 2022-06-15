import { ChangeEvent, MouseEvent, useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { IAddMovie, Movie } from "../models/Movie";
import { addMovie } from "../services/moviesService";
import Spinner from "./Spinner";
import { useForm, SubmitHandler } from "react-hook-form";

const emptyMovie: IAddMovie = {
    director: "",
    imdb: "",
    originalTitle: "",
    productiohType: "",
    year: 0
}

export default function AddMovieForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<Movie>();
    const [movie, setMovie] = useState<IAddMovie>(emptyMovie);
    const navigate = useNavigate();
    const addMovieMutation = useMutation((newMovie: IAddMovie) => addMovie(newMovie));

    const onSubmit: SubmitHandler<Movie> = data => {
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
        return <>Movie added.</>;
    }

    return (
        <>
            <button onClick={() => navigate(-1)}>Back</button>
            <h1>Add movie</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid">
                    <div className="grid__item--header">
                        Original title
                    </div>
                    <div className="grid__item">
                        <input {...register("originalTitle", { required: 'Original title is required' })} />
                        {errors.originalTitle && <span>{errors.originalTitle?.message}</span>}
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
                        <input {...register("productiohType", { required: 'Production type is required' })} />
                        {errors.productiohType && <span>{errors.productiohType?.message}</span>}
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