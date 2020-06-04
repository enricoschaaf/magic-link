import { PrismaClient } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"
const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { confirm } = req.body
    if (typeof confirm === "string") {
      const { createdAt } = await prisma.token.update({
        where: { confirm },
        data: { confirmed: true },
        select: { createdAt: true }
      })
      if (
        Date.now() <
        new Date(createdAt).getUTCMilliseconds() + 1000 * 60 * 10
      )
        return res.end()
    }
    return res.status(400).end()
  }
  return res.status(405).end()
}
