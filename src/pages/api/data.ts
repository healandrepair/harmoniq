import type { NextApiRequest, NextApiResponse } from "next";



export default function handler(req : NextApiRequest, response : NextApiResponse) {
    const {method} = req
    
    response.status(200).json([
        {
            name: "John Doe",
            value: 1,
        },
        {
            name: "Jane Doe",
            value: 2,
        },
    ]);
}