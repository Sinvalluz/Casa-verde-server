import fastify from 'fastify';
import emailRouter from './routes/email.js';
import cors from '@fastify/cors';

const server = fastify({ logger: true });

server.register(cors, {
	origin: 'http://localhost:5173',
	methods: ['GET', 'POST', 'PUT', 'DELETE'],
});

server.register(emailRouter);
server.get('/ping', async (request, reply) => {
	return 'pong\n';
});

server.listen({ port: 3333 }, (err, address) => {
	if (err) {
		console.error(err);
		process.exit(1);
	}
	console.log(`Server listening at ${address}`);
});
