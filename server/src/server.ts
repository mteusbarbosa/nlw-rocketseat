/* eslint-disable prettier/prettier */
import fastfy from 'fastify'
import { memoriesRoutes } from './routes/memories'
import cors from '@fastify/cors'

const app = fastfy()
app.register(cors, {
  origin: true,
})
app.register(memoriesRoutes)

// Recebe um objeto dentro de uma promisse
app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server running on http://localhost:3333')
  })
