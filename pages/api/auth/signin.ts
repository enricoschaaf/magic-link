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
      const accessToken = nanoid()
      await prisma.token.create({
        data: { id, confirm, accessToken, User: { connect: { email } } }
      })
      console.log("http://localhost:3000/confirm/" + confirm)
      return res.json({ data: { id } })
    }
    return res.status(400).end()
  }
  return res.status(405).end()
}
