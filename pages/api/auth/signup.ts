import { PrismaClient } from "@prisma/client"
import { nanoid } from "nanoid"
import { NextApiRequest, NextApiResponse } from "next"
import { sendEmail } from "utils/sendEmail"

const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { email } = req.body
    if (email) {
      const id = nanoid()
      const confirm = nanoid()
      const accessToken = nanoid()
      try {
        await prisma.user.create({
          data: {
            email,
            tokens: {
              create: { id, confirm, accessToken }
            }
          }
        })
      } catch (err) {
        return res.json({ error: {} })
      }
      await sendEmail({
        link: "https://magic-link.enricoschaaf.com/confirm/" + confirm,
        to: email
      })
      return res.json({ data: { id } })
    }
    return res.status(400).end()
  }
  return res.status(405).end()
}
