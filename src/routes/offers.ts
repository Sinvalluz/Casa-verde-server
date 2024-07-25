import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import plants from '../data/plants.js';

async function offersRoute(fastify: FastifyInstance, options: FastifyPluginOptions) {
	fastify.get('/plants', (request, reply) => {
		return reply.send(plants);
	});
}

export default offersRoute;
