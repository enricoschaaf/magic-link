import { PrismaClient } from "@prisma/client"
import { serialize } from "cookie"
import { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const { id } = req.query
    if (typeof id === "string") {
      const token = await prisma.token.findOne({
        where: { id },
        select: { accessToken: true, confirmed: true, used: true }
      })
      if (token.confirmed && token.used === false) {
        await prisma.token.update({
          where: { id },
          data: { used: true }
        })
        res.setHeader(
          "Set-Cookie",
          serialize("accessToken", token.accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 60 * 60 * 24 * 365,
            path: "/"
          })
        )
        return res.json({ data: { confirmed: true } })
      }
      return res.json({ data: { confirmed: false } })
    }
    return res.status(400).end()
  }
  return res.status(405).end()
}
