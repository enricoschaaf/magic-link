import { PrismaClient } from "@prisma/client"
import { serialize } from "cookie"
import { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { accessToken } = req.cookies
    if (accessToken) {
      await prisma.token.delete({ where: { accessToken } })
      res.setHeader(
        "Set-Cookie",
        serialize("accessToken", "", {
          path: "/",
          maxAge: -1
        })
      )
      res.json({ data: {} })
    }

    return res.status(400).end()
  }
  return res.status(405).end()
}
