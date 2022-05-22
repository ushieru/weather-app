import dotenv from 'dotenv'

export default function setEnv() {
    dotenv.config({ path: '.env.test' })
}