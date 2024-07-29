import type  {NextApiRequest, NextApiResponse} from "next";


type Data = {
    success: boolean;
    data?: any;
}

// Get Spotify Data
export async function GetTopSongsApi(req: NextApiRequest, res: NextApiResponse<Data>) {
    var amount : number = parseInt(req.query.amount as string);

    var baseurl = "https://api.spotify.com";
    var fullUrl = baseurl + "/v1/me/top/tracks?limit=" + amount;
    var token = await GetToken(req, res);

    const headers = {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
    };

    const response = await fetch(fullUrl, {
        method: "GET",
        headers: headers
    });

    if (response.ok) {
        const data = await response.json();
        return data;
    }
    
    return {
        success: false,
        data: null
    };
}

export async function GetToken(req: NextApiRequest, res: NextApiResponse<Data>){
    var client_id = process.env.NEXT_PUBLIC_CLIENT_ID;
    var client_secret = process.env.NEXT_PUBLIC_CLIENT_SECRET;

    const headers = {
        Authorization: "Basic " + Buffer.from(client_id + ":" + client_secret).toString("base64"),
        "Content-Type": "application/x-www-form-urlencoded"
    };

    const body = new URLSearchParams({
        grant_type: 'client_credentials'
    });

    const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: headers,
        body: body.toString()
    });
    
    if (!response.ok) {
        return {
            success: false,
            data: null
        };
    }

    const data = await response.json();
    return data.access_token;
}

export async function GetAuthorizationCode(req: NextApiRequest, res: NextApiResponse<Data>) {
    var client_id = process.env.NEXT_PUBLIC_CLIENT_ID;
    var redirect_uri = process.env.NEXT_PUBLIC_REDIRECT_URI;

    const scopes = "user-read-private user-read-email";
    const url = "https://accounts.spotify.com/authorize" +
        "?response_type=code" +
        "&client_id=" + client_id +
        (scopes ? "&scope=" + encodeURIComponent(scopes) : "") +
        "&redirect_uri=" + encodeURIComponent(redirect_uri);

    res.redirect(url);
}