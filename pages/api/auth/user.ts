import { PrismaClient } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const { accessToken } = req.cookies
    if (accessToken) {
      if (typeof accessToken === "string") {
        const {
          User: { email }
        } = await prisma.token.findOne({
          where: { accessToken },
          select: { User: { select: { email: true } } }
        })
        return res.json({ data: { email } })
      }
      return res.status(400).end()
    }
    return res.json({ error: {} })
  }
  return res.status(405).end()
}