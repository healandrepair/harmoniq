import type { NextApiRequest, NextApiResponse } from "next";

import cookie from "cookie";

type Data = {
    success: boolean;
    data?: any;
    error?: string;
};

export default async function TopArtistsRoute(req: NextApiRequest, res: NextApiResponse<Data>) {
    try {
        // Get Spotify Data
        var queryParams = req.query.toString();

        let limit : number = parseInt(req.query.amount as string, 10);
        limit = 10;

        const baseurl = "https://api.spotify.com";
        const fullUrl = `${baseurl}/v1/me/top/artists?${queryParams}`;

        // Parse the cookies to get the token
        const cookies = cookie.parse(req.headers.cookie || '');
        const token = cookies.token;

        // Log the token for debugging purposes
        console.log('Test token:', token);

        if (!token) {
            // Return an unauthorized response if token is missing
            res.status(401).json({ success: false, error: "Not authenticated" });
            return;
        }

        const headers = {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json"
        };

        console.log("Making API call to fetching top songs...");
        const response = await fetch(fullUrl, {
            method: "GET",
            headers: headers
        });

        console.log(response)

        if (response.ok) {
            const data = await response.json();
            // Send the successful response
            res.status(200).json({ success: true, data });
        } else {
            // Handle non-OK responses
            console.error(`Spotify API error: ${response.statusText}`);
            res.status(response.status).json({ success: false, error: response.statusText });
        }
    } catch (error) {
        console.error("Error fetching top songs:", error);
        res.status(500).json({ success: false, error: error.message || "Internal Server Error" });
    }
}