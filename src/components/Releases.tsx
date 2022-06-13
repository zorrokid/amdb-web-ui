import { useEffect, useState } from "react";
import { Release } from "../models/Release";
import { getReleases } from "../services/releasesService";

export default function Releases() {

    const initialState: Release[] = [];
    const [releases, setReleases] = useState(initialState);


    useEffect(() => {

        const getResult = async () => {
            const movies = await getReleases();
            setReleases(movies);
        }

        getResult();
    }, []);

    return (
        <>
            <h2>Releases</h2>
            <ul>
                {
                    releases ? <ul>{
                        releases.map((release: Release, index: number) =>
                            <li key={index}>{release.format} {release.movie.OriginalTitle}</li>)
                    }</ul> : null
                }
            </ul>
        </>
    );
}   