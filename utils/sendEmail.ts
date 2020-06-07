import client from "@sendgrid/mail"

client.setApiKey(process.env.SENDGRID_API_KEY)

export async function sendEmail({ link, to }: { link: string; to: string }) {
  await client.send({
    from: "Magic Link Auth <noreply@enricoschaaf.com>",
    to,
    subject: "Sign in with",
    text: `${link}`,
    html: `${link}`
  })
}
