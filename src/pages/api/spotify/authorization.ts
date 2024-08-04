import { NextApiRequest, NextApiResponse } from "next";
import { GetAuthorizationCode } from "../apiHandlers/spotifyapiservice";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await GetAuthorizationCode(req, res);
}