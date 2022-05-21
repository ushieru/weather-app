import type { NextApiRequest, NextApiResponse } from 'next'
import { APIError, IAPIError } from '../../@types/apiError';
import { Weather } from '../../@types/weather';

export default async function handler(req: NextApiRequest, res: NextApiResponse<Weather | IAPIError>) {
  if (req.method != 'GET') return res.status(405).json(new APIError(405, 'Method Not Allowed'))
  const query = req.query.q as string
  if (!query) return res.status(400).json(new APIError(400, 'Missing Paramas'))
  const url = buildURL(query)
  const response = await fetch(url, options)
  const jsonRespose: Weather = await response.json()
  if (!response.ok) return res.status(400).json(jsonRespose)
  return res.json(jsonRespose)
}

const buildURL = (query: string) =>
  `https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.RAPID_API_KEY as string
  }
}