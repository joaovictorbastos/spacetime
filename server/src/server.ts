import 'dotenv/config'
import fastify from "fastify"
import cors from "@fastify/cors"
import jwt from '@fastify/jwt'
import multipart from '@fastify/multipart'
import { memoriesRoutes } from "./routes/memories"
import { authRoutes } from './routes/auth'
import { uploadRoutes } from './routes/upload'
import { resolve } from 'node:path'
const app = fastify()

app.register(cors, {
  origin: true, //todas URLs de front podem acessar o backend
  // origin: ['http://localhost:3000', 'https://linkdoprojeto.com']
})

app.register(jwt, {
  secret: 'spacetime',
})
app.register(multipart)
app.register(authRoutes)
app.register(memoriesRoutes)
app.register(uploadRoutes)
app.register(require('@fastify/static'), {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads'
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("http server running");
  });
