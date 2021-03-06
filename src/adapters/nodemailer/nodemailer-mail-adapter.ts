import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../mail-adapter';

var transport = nodemailer.createTransport({
    host: process.env.MAIL_TRAP_HOST,
    port: Number(process.env.MAIL_TRAP_USER),
    auth: {
        user: process.env.MAIL_TRAP_USER,
        pass: process.env.MAIL_TRAP_PASSWORD,
    },
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: process.env.MAIL_TRAP_FROM,
            to: process.env.MAIL_TRAP_TO,
            subject,
            html: body,
        });
    }
}
