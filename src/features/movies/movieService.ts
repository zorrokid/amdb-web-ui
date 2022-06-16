import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Movie } from "../../models/Movie";

export interface MoviesFilter {
    start?: number;
    end?: number;
    limit?: number;
    name?: string;
}

export const movieApi = createApi({
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    endpoints: (builder) => ({
        getMovies: builder.query<Movie[], MoviesFilter>({
            query: (arg: MoviesFilter) => {
                return {
                    url: 'movies',
                    params: {
                        _start: arg.start,
                        _end: arg.end,
                        _limit: arg.limit,
                        q: arg.name,
                    }
                };
            },
        })
    })
})

export const { useGetMoviesQuery } = movieApi;