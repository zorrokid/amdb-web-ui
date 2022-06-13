import { useEffect, useState } from "react";
import { Release } from "../models/Release";
import { getReleases } from "../services/releasesService";

export default function Releases() {

    const [releases, setReleases] = useState<Release[]>([]);

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
                            <li key={index}>{release.mediaType} {release.movie.originalTitle}</li>)
                    }</ul> : null
                }
            </ul>
        </>
    );
}   