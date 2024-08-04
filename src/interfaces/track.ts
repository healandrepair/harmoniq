import {Album} from "@/interfaces/album";
import {Artist} from "@/interfaces/artist";
import {External_url} from "@/interfaces/external_url";

export interface Track {
    album: Album;
    artists: Artist[];
    name: string;
    popularity: number;
    external_urls: External_url;
    preview_url: string;
}