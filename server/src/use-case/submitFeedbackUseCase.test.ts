import { SubmitFeedbackUseCase } from "./submitFeedback-use-case"

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
 { create: createFeedbackSpy},
 { sendMail: sendMailSpy }
)

describe('Submit feedback', () => {
 it('should be able to submit a feedback', async () => {

  await expect(submitFeedback.execute({
   type: "BUG",
   comment: 'exampple comment',
   screenshot: 'data:image/png;base64,89d8f69sf8d6gd9f7g6d9f7g6d'
  })).resolves.not.toThrow();

  expect(createFeedbackSpy).toHaveBeenCalled()
  expect(sendMailSpy).toHaveBeenCalled()
 })

 it('should not be able to submit a feedback without type', async () => {

  await expect(submitFeedback.execute({
   type: "",
   comment: 'exampple comment',
   screenshot: 'data:image/png;base64,89d8f69sf8d6gd9f7g6d9f7g6d'
  })).rejects.toThrow();
 })

 it('should not be able to submit a feedback without comment', async () => {

  await expect(submitFeedback.execute({
   type: "BUG",
   comment: '',
   screenshot: 'data:image/png;base64,89d8f69sf8d6gd9f7g6d9f7g6d'
  })).rejects.toThrow();
 })

 it('should not be able to submit a feedback with an invalid screenshot', async () => {

  await expect(submitFeedback.execute({
   type: "BUG",
   comment: 'ta tudo bugado',
   screenshot: 'test.jpg'
  })).rejects.toThrow();
 })
})