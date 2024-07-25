import fastify from 'fastify';
import emailRouter from './routes/email.js';
import cors from '@fastify/cors';
import offersRoute from './routes/offers.js';
import souceRouter from './routes/source.js';
import { config } from 'dotenv';
import fastifyStatic from '@fastify/static';
import { fileURLToPath } from 'url';
import path from 'path';

config();

const server = fastify({ logger: true });
const port = process.env.PORT;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

server.register(cors, {
	origin: 'http://localhost:5173',
	methods: ['GET', 'POST', 'PUT', 'DELETE'],
});

server.register(fastifyStatic, {
	root: path.join(__dirname, 'public'),
	prefix: '/public/',
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
