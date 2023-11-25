
import express from 'express'
import morgan from 'morgan'

const app = express()

const PORT = 4000

app.use(morgan("tiny"))

app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`))