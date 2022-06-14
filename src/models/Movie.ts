export interface IAddMovie {
    originalTitle: string;
    year: number;
    productiohType: string;
    director: string;
    imdb: string;
};

export interface Movie extends IAddMovie {
    id: number;
};