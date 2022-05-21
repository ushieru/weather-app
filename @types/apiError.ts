export interface APIError {
    error: Error
}

export interface Error {
    code: number
    message: string
}