import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { Movie } from "../models/Movie";
import { updateMovie } from "../services/moviesService";
import Spinner from "./Spinner";

export default function MovieEditForm({ movie }: { movie: Movie }) {
    const navigate = useNavigate();

    const editMovieMutation = useMutation((newMovie: Movie) => updateMovie(newMovie));

    const { register, handleSubmit, reset, formState: { errors } } = useForm<Movie>(
        { defaultValues: movie }
    );
    
    useEffect(() => {
        reset(movie);
    },[movie]);

    const onSubmit: SubmitHandler<Movie> = movie => {
        console.log(movie);
        editMovieMutation.mutate(movie);
    }

    if (editMovieMutation.error) {
        throw editMovieMutation.error;
    }

    if (editMovieMutation.isLoading) {
        return <Spinner />;
    }

    if (editMovieMutation.isSuccess) {
        return (
        <>
            <button onClick={() => navigate(-1)}>Back</button>
            <>Done updating movie.</>
        </>);
    }

    return (
        <>
            <button onClick={() => navigate(-1)}>Back</button>
            <h1>Edit movie</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid">
                    <div className="grid__item--header">
                        Original title
                    </div>
                    <div className="grid__item">
                        <input {...register("originalTitle", { required: true })} />
                        {errors.originalTitle && <span>Required</span>}
                    </div>
                    <div className="grid__item--header">
                        Director
                    </div>
                    <div className="grid__item">
                        <input type="text" {...register("director")} />
                    </div>
                    <div className="grid__item--header">
                        IMDB
                    </div>
                    <div className="grid__item">
                        <input type="text" {...register("imdb")} />
                    </div>
                    <div className="grid__item--header">
                        Production type
                    </div>
                    <div className="grid__item">
                        <input type="text" {...register("productiohType")} />
                    </div>
                    <div className="grid__item--header">
                        ID
                    </div>
                    <div className="grid__item">
                        <input type="hidden" {...register("id")} />
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