import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { Movie } from "../models/Movie";
import { updateMovie } from "../services/moviesService";

export default function MovieEditForm({ movie }: { movie: Movie }) {
    const navigate = useNavigate();

    const editMovieMutation = useMutation((newMovie: Movie) => updateMovie(newMovie));

    const { register, handleSubmit, formState: { errors } } = useForm<Movie>(
        { defaultValues: movie }
    );

    const submit = () => {
        console.log("Submit");
    }

    const onSubmit: SubmitHandler<Movie> = movie => {
        console.log(movie);
        editMovieMutation.mutate(movie);
    }


    return (
        <>
            <button onClick={() => navigate(-1)}>Back</button>
            <button onClick={() => submit()}>Save changes</button>
            <h1>Edit</h1>

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