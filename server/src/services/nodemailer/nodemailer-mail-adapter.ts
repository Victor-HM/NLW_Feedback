import { MailAdapter, SendMailData } from "../MainAdapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
 host: "smtp.mailtrap.io",
 port: 2525,
 auth: {
   user: "455a896d4e1b48",
   pass: "b967b88d9527e1"
 }
});

export class NodemailerMailAdapter implements MailAdapter {
 async sendMail({ subject, body }: SendMailData) {
   await transport.sendMail({
   from: 'Equipe Feedget <oi@feedget.com>',
   to: 'Victor Hugo <victor.27cm.santos.com>',
   subject,
   html: body
 })
 };
}