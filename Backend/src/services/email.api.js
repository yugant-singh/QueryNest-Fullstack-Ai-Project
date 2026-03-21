import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async ({ to, subject, text, html }) => {
  try {
    const { data, error } = await resend.emails.send({
      from: 'QueryNest <onboarding@resend.dev>',
      to,
      subject,
      html
    })

    if (error) {
      console.error("Resend error:", error)
      throw new Error(error.message)
    }

    console.log("Email sent successfully:", data)
  } catch (err) {
    console.error("Email sending failed:", err.message)
    throw err
  }
}