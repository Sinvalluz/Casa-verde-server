import fastify from 'fastify';
import emailRouter from './routes/email.js';
import cors from '@fastify/cors';
import offersRoute from './routes/offers.js';
import souceRouter from './routes/source.js';
import { config } from 'dotenv';
config();

const server = fastify({ logger: true });
const port = process.env.PORT;

server.register(cors, {
	origin: 'http://localhost:5173',
	methods: ['GET', 'POST', 'PUT', 'DELETE'],
});

server.register(emailRouter);
server.register(offersRoute);
server.register(souceRouter);

server.listen({ port: 3333 }, (err, address) => {
	if (err) {
		console.error(err);
		process.exit(1);
	}
	console.log(`Server listening at http://localhost:${port}`);
});
