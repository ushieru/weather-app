export interface IAPIError {
    error: Error
}

export interface Error {
    code: number
    message: string
}

export class APIError implements APIError {
    error: Error
    constructor(code: number, message: string) {
        this.error = {
            code,
            message
        }
    }
}