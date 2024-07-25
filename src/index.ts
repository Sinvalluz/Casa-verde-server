import fastify from "fastify";
import emailRouter from "./routes/email.js";

const server = fastify();

server.register(emailRouter);
server.get("/ping", async (request, reply) => {
  return "pong\n";
});

server.listen({ port: 3333 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
