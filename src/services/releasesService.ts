import { Release } from "../models/Release";

export async function getReleases(): Promise<Release[]> {
    return fetch('http://localhost:3000/releases')
        .then((response: Response) => {
            if (response.ok) return response.json();
            throw response;
        });
}