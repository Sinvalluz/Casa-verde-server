import fastify from "fastify";

const emailRouter = fastify();

emailRouter.post("./send-email", (request, reply) => {});
