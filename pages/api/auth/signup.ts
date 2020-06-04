import { PrismaClient } from "@prisma/client"
import { nanoid } from "nanoid"
import { NextApiRequest, NextApiResponse } from "next"
const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { email } = req.body
    if (email) {
      const id = nanoid()
      const confirm = nanoid()
      const access = nanoid()
      await prisma.user.create({
        data: {
          email,
          tokens: {
            create: { id, confirm, access }
          }
        }
      })
      console.log("http://localhost:3000/confirm/" + confirm)
      res.json({ data: { id } })
    }
    res.status(400).end()
  }
  res.status(405).end()
}
