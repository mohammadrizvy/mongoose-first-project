import express, { Application, Request, Response } from 'express'

import cors from 'cors'
import { StudentsRoute } from './App/Modules/students/students.route'

const app: Application = express()

//Parser
app.use(express.json())
app.use(cors())

// Application routes
app.use('/api/v1/students', StudentsRoute)

const getAcontroller = (req: Request, res: Response) => {
  // const a = 10
  // res.send(a)
  res.send('Fuck you')
}

app.get('/', getAcontroller)

export default app
