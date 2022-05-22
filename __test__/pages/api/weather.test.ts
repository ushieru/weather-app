// @vitest-environment node

import { expect, test, describe } from 'vitest'
import { createMocks } from 'node-mocks-http'
import weatherApiRoute from '../../../pages/api/weather'

describe('api/weather', () => {
    test('Should return a weather object', async () => {
        const { req, res } = createMocks({
            method: 'GET',
            query: { q: 'Guadalajara' },
        });

        await weatherApiRoute(req, res);

        const responseJson = JSON.parse(res._getData())

        const name = responseJson.location.name
        const region = responseJson.location.region
        const country = responseJson.location.country

        expect(res._getStatusCode()).toBe(200);
        expect(name).toBe('Guadalajara');
        expect(region).toBe('Jalisco');
        expect(country).toBe('Mexico');
    })

    test('Should return a error', async () => {
        const { req, res } = createMocks({
            method: 'GET',
            query: {},
        });

        await weatherApiRoute(req, res);

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
            query: { q: 'Guadalajara' },
        });

        await weatherApiRoute(req, res);

        const responseJson = JSON.parse(res._getData())

        const error = responseJson.error
        const code = error.code
        const message = error.message

        expect(res._getStatusCode()).toBe(405);
        expect(code).toBe(405);
        expect(message).toBe('Method Not Allowed');
    })

})