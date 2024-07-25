import { FastifyInstance, FastifyPluginCallback, FastifyPluginOptions } from 'fastify';
import nodemailer from 'nodemailer';
import { config } from 'dotenv';
config();

async function emailRouter(fastify: FastifyInstance, options: FastifyPluginOptions) {
	fastify.post('/send-email', async (request, reply) => {
		interface RequestBody {
			email: string;
		}

		const { email } = (await request.body) as RequestBody;
		console.log(email);

		const transporter = nodemailer.createTransport({
			host: 'smtp.gmail.com.',
			port: 465,
			secure: true,
			service: 'gmail',
			auth: {
				user: process.env.USER_EMAIL,
				pass: process.env.USER_PASS,
			},
		});
		const mailOptions = {
			from: 'contato.sinvalluz@gmail.com',
			to: email,
			subject: 'Assunto do Email',
			text: `Olá, ${email}.Boas-vindas à Casa Verde! Você se cadastrou em nossa newsletter e vai começar a receber e-mails com as novidades de nossa loja e dicas de como cuidar de suas plantas. Até logo!`,
		};

		await transporter.sendMail(mailOptions);

		return reply.status(201).send({ message: 'Email sent successfully' });
	});
}

export default emailRouter;
