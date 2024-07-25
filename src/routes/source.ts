import { FastifyInstance, FastifyPluginOptions } from 'fastify';

async function souceRouter(fastify: FastifyInstance, options: FastifyPluginOptions) {
	fastify.get('/', (request, reply) => {
		return 'pong';
	});
}

export default souceRouter;
