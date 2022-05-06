import express from 'express';
import { routes } from './routes';
import cors from 'cors'

const app = express()

/**
 app.use(cors({
 origin: 'https://{endereco que so ele pode usar o back end}'
}))
 */
app.use(cors())
app.use(express.json())
app.use(routes);

app.listen(3333, () => {
 console.log('HTTP server running')
})