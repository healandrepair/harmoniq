import { NextApiRequest, NextApiResponse } from "next";
import { GetAuthorizationCode } from "../apiHandlers/SpotifyApiService";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await GetAuthorizationCode(req, res);
}