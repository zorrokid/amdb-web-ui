import { useQuery } from "react-query";
import { Movie } from "../models/Movie";
import { getMovies } from "../services/moviesService";
import Filters from "./Filters";
import ListMovie from "./ListMovie";
import Spinner from "./Spinner";

export default function Movies() {
    // const [movies, setMovies] = useState<Movie[]>([]);

    const { isLoading, error, data } = useQuery(`movies`, () => getMovies({ start: 1, end: 50 }))

    const submit = async () => {
        console.log("submit");
        // const movies = await getMovies({});
        // setMovies(movies);
    }

    if (isLoading) return <Spinner />;
    if (error) throw error;
    if (!data) return <></>;

    return (
        <>
            <Filters submit={submit} />
            <h2>Movies</h2>
            <section>
                {
                    data
                        ? data.map((movie: Movie, index: number) => <ListMovie movie={movie} />)
                        : null
                }
            </section>
        </>
    );
}