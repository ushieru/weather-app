import dotenv from 'dotenv'

export default function setEnv() {
    dotenv.config({ path: '.env.test' })
    if (!process.env.RAPID_API_KEY) {
        throw 'RAPID_API_KEY is not defined, You must define it in .env.test'
    }
}