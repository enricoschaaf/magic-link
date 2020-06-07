import { PrismaClient } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const { accessToken } = req.cookies
    if (accessToken) {
      if (typeof accessToken === "string") {
        const data = await prisma.token.findOne({
          where: { accessToken },
          select: { User: { select: { email: true } } }
        })
        if (data?.User) {
          return res.json({ data: { email: data.User.email } })
        }
      }
    }
    return res.status(400).end()
  }
  return res.status(405).end()
}
