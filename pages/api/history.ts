import type { NextApiRequest, NextApiResponse } from 'next'
import { APIError } from '../../@types/apiError';
import { Weather } from '../../@types/weather';

const buildURL = (query: string, date: string) =>
    `https://weatherapi-com.p.rapidapi.com/history.json?q=${query}&dt=${date}`

export default async function handler(req: NextApiRequest, res: NextApiResponse<Weather | APIError>) {
    const query = req.query.q as string
    const date = req.query.dt as string
    if (!query || !date) return res.status(400).json({
        error: {
            code: 400,
            message: 'Missing Paramas'
        }
    })
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
            'X-RapidAPI-Key': process.env.RAPID_API_KEY as string
        }
    }
    const url = buildURL(query, date)
    const response = await fetch(url, options)
    const jsonRespose: Weather = await response.json()
    if (!response.ok) return res.status(400).json(jsonRespose)
    return res.json(jsonRespose)
}
