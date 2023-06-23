import fastify from "fastify"
import cors from "@fastify/cors"
import { memoriesRoutes } from "./routes/memories"
const app = fastify()

app.register(cors,{
  origin: true, //todas URLs de front podem acessar o backend
  // origin: ['http://localhost:3000', 'https://linkdoprojeto.com']
})
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("http server running");
  });
