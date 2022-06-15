import Counter from "../features/counter/Counter";
import { useGetPokemonByNameQuery } from "../services/pokemonService";
import Spinner from "./Spinner";

export default function Main() {
    const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');

    if (isLoading) {
        return <Spinner />;
    }

    if (error) throw error;

    return (
        <>
            <section className="container">Main content</section >
            <p>{data && data.species.name}</p>
            <Counter />
        </>
    );

}