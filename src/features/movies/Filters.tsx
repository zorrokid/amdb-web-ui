import { ChangeEvent, useState } from "react";
import { MoviesFilter } from "./movieService";

export interface FiltersProps {
    filter: MoviesFilter;
    updateFilter: (filter: MoviesFilter) => void;
}

export default function Filters(filterProps: FiltersProps) {

    const [filter, setFilter] = useState(filterProps.filter);

    const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
        const newFilter = {
            ...filterProps.filter,
            [ev.target.id]: ev.target.value
        };
        setFilter(newFilter);
    }

    const updateFilter = () => {
        filterProps.updateFilter(filter);
    }

    return (
        <>
            <input autoFocus value={filter.name} type="text" onChange={handleChange} id="name" />
            <button onClick={updateFilter}>Update</button>
        </>
    );
}