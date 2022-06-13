import { Movie } from "./Movie";

export interface Release {
    movie: Movie;
    id: number;
    mediaType: string;
    checked: boolean;
    localTitle: string;
    edition: string,
    country: string,
    case: string,
    discs: number,
    status: string,
    condition: string,
    notes: string,
    isRental: boolean,
    hasSlipCover: boolean,
    hasHologram: boolean,
    barcode: string,
    collectionId: number,
    series: string,
    publisher: string,
    hasLeaflet: boolean,
    hasSceneLeaflet: boolean,
    isDoubleSidedDisc: boolean,
    hasDoubledSidedCover: boolean
};