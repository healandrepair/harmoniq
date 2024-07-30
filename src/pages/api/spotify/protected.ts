import { NextApiRequest, NextApiResponse } from 'next';
import cookie from 'cookie';

export default async function protectedRoute(req: NextApiRequest, res: NextApiResponse) {
    const cookies = cookie.parse(req.headers.cookie || '');
    const token = cookies.token;

    // Log the token for debugging purposes
    console.log('Access token:', token);

    if (!token) {
        res.status(401).json({ error: 'Not authenticated' });
        return;
    }

    // Use the token for your protected API logic
    res.status(200).json({ message: 'Authenticated', token });
}