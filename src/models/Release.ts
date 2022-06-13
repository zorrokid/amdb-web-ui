import { Movie } from "./Movie";

export interface Release {
    id: number;
    format: string;
    movie: Movie;
};