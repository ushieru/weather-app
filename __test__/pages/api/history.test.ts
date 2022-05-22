// @vitest-environment node

import { expect, test, describe } from 'vitest'
import { createMocks } from 'node-mocks-http'
import historyApiRoute from '../../../pages/api/history'
import { History } from '../../../@types/history'

describe('api/history', () => {
    test('Should return a history object', async () => {
        const { req, res } = createMocks({
            method: 'GET',
            query: { q: 'Guadalajara', dt: '2022/05/21' },
        });

        await historyApiRoute(req, res);

        const responseJson = JSON.parse(res._getData()) as History

        const name = responseJson.location.name
        const region = responseJson.location.region
        const country = responseJson.location.country
        const forecast = responseJson.forecast.forecastday

        expect(res._getStatusCode()).toBe(200)
        expect(name).toBe('Guadalajara')
        expect(region).toBe('Jalisco')
        expect(country).toBe('Mexico')
        expect(forecast.length).toBeGreaterThan(0)
    })

    test('Should return a error', async () => {
        const { req, res } = createMocks({
            method: 'GET',
            query: {},
        });

        await historyApiRoute(req, res);

        const responseJson = JSON.parse(res._getData())

        const error = responseJson.error
        const code = error.code
        const message = error.message

        expect(res._getStatusCode()).toBe(400);
        expect(code).toBe(400);
        expect(message).toBe('Missing Paramas');
    })

    test('Should return a error', async () => {
        const { req, res } = createMocks({
            method: 'POST',
            query: { q: 'Guadalajara', dt: '2022/05/21' },
        });

        await historyApiRoute(req, res);

        const responseJson = JSON.parse(res._getData())

        const error = responseJson.error
        const code = error.code
        const message = error.message

        expect(res._getStatusCode()).toBe(405);
        expect(code).toBe(405);
        expect(message).toBe('Method Not Allowed');
    })

})