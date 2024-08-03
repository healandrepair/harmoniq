import {Artist} from "@/interfaces/artist";
import {Image} from "@/interfaces/image";

export interface Album {
    name: string;
    artists: Artist[];
    release_date: string;
    total_tracks: number;
    type: string;
    uri: string;
    images : Image[];
}