import {Artist} from "@/interfaces/artist";

export interface Album {
    name: string;
    artists: Artist[];
    release_date: string;
    total_tracks: number;
    type: string;
    uri: string;
}