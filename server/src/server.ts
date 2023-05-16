/* eslint-disable prettier/prettier */
import fastfy from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastfy()
const prisma = new PrismaClient()

// Quando acessam o endereço hello retorna
app.get('/users', async () => {
  const users = await prisma.user.findMany()

  return users
})

// Recebe um objeto dentro de uma promisse
app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server running on http://localhost:3333')
  })
