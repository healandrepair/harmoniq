import type { NextApiRequest, NextApiResponse } from "next";

import {GetTopSongsApi} from '../apiHandlers/SpotifyApiService';

type Data = {
    success: boolean;
    data?: any;
    error?: string;
};

export default async function TopSongsRoute (req : NextApiRequest, response : NextApiResponse) {
    
    return await GetTopSongsApi(req, response);
}