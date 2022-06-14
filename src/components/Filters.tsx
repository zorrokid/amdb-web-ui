import { ChangeEvent, useState, MouseEvent } from "react";
import { MoviesFilter } from "../services/moviesService";

export interface FiltersProps {
    filter: MoviesFilter;
    updateFilter: (filter: MoviesFilter) => void;
}

export default function Filters(filterProps: FiltersProps) {

    const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
        const newFilter = {
            ...filterProps.filter,
            [ev.target.id]: ev.target.value
        };
        filterProps.updateFilter(newFilter);
    }

    return (
        <>
            <input autoFocus value={filterProps.filter.name} type="text" onChange={handleChange} id="name" />
        </>
    );
}