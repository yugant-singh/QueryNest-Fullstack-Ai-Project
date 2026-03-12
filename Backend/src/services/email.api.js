import dotenv from "dotenv"
dotenv.config()
import nodemailer from "nodemailer"
import { google } from "googleapis"

const OAuth2 = google.auth.OAuth2
console.log("REFRESH TOKEN:", process.env.REFRESH_TOKEN)
const oauth2Client = new OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  "https://developers.google.com/oauthplayground"
)

oauth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN
})

export const sendEmail = async ({ to, subject, text, html }) => {

  const accessToken = await oauth2Client.getAccessToken()

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.GOOGLE_USER,
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken: accessToken
    }
  })

  const mailOptions = {
    from: process.env.GOOGLE_USER,
    to,
    subject,
    text,
    html
  }

  const info = await transporter.sendMail(mailOptions)
  console.log("Email sent:", info.response)
}