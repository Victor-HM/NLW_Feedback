import express from 'express';
import nodemailer from 'nodemailer'
import { PrismaFeedbacksRepositories } from './repositories/prisma/prismaFeedbacksRepositories';
import { NodemailerMailAdapter } from './services/nodemailer/nodemailer-mail-adapter';
import { SubmitFeedbackUseCase } from './use-case/submitFeedback-use-case';

export const routes = express.Router()



routes.post('/feedbacks', async (req, res) => {
 const { type, comment, screenshot } = req.body;
 
 const prismaFeedbackRepository = new PrismaFeedbacksRepositories()
 const nodemailerMailAdapter = new NodemailerMailAdapter()

 const submitFeedbackUseCase = new SubmitFeedbackUseCase(
   prismaFeedbackRepository,
   nodemailerMailAdapter
  )

 await submitFeedbackUseCase.execute({
  type,
  comment,
  screenshot
 })



 return res.status(201).send();
})