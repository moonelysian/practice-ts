import app from './app'
import dotenv from 'dotenv'

dotenv.config()

const port = Number(process.env.PORT) || 3000
const host = process.env.HOST || 'localhost'

app.listen(port, host, () => {
    console.log(`server is running on ${port}`)
})