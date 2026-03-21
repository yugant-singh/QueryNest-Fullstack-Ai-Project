import * as Brevo from '@getbrevo/brevo'

const apiInstance = new Brevo.TransactionalEmailsApi()
apiInstance.setApiKey(
  Brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY
)

export const sendEmail = async ({ to, subject, text, html }) => {
  try {
    const sendSmtpEmail = new Brevo.SendSmtpEmail()

    sendSmtpEmail.subject = subject
    sendSmtpEmail.htmlContent = html
    sendSmtpEmail.sender = {
      name: 'QueryNest',
      email: process.env.GOOGLE_USER  // ✅ tera Gmail as sender
    }
    sendSmtpEmail.to = [{ email: to }]  // ✅ kisi bhi email pe bhejo

    const data = await apiInstance.sendTransacEmail(sendSmtpEmail)
    console.log('Email sent successfully:', data.body?.messageId)
  } catch (err) {
    console.error('Email sending failed:', err.message)
    throw err
  }
}