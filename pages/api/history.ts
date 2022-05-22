import type { NextApiRequest, NextApiResponse } from 'next'
import fetch from 'node-fetch'
import { IAPIError, APIError } from '../../@types/apiError';
import { History } from '../../@types/history';

export default async function handler(req: NextApiRequest, res: NextApiResponse<History | IAPIError>) {
  if (req.method != 'GET') return res.status(405).json(new APIError(405, 'Method Not Allowed'))
  const query = req.query.q as string
  const date = req.query.dt as string
  if (!query) return res.status(400).json(new APIError(400, 'Missing Paramas'))
  const url = buildURL(query, date)
  const response = await fetch(url, options)
  const jsonRespose = await response.json() as History
  if (!response.ok) return res.status(400).json(jsonRespose)
  return res.json(jsonRespose)
}

const buildURL = (query: string, date: string) =>
  `https://weatherapi-com.p.rapidapi.com/history.json?q=${query}&dt=${date}`

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.RAPID_API_KEY as string
  }
}