import { NextApiRequest, NextApiResponse } from 'next';
import {GetToken} from "@/pages/api/apiHandlers/spotifyapiservice";

export default async function callback(req: NextApiRequest, res: NextApiResponse) {
    const { code } = req.query;

    if (!code) {
        res.status(400).json({ error: 'Authorization code not provided' });
        return;
    }

    // Exchange the authorization code for an access token
    await GetToken(req, res, code as string);
    
    // Redirect to the home page
    res.redirect('/');
}