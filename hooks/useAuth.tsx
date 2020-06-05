import { useRouter } from "next/router"
import { useEffect } from "react"
import { useUser } from "./useUser"

export function useAuth() {
  const user = useUser()
  const { push } = useRouter()
  useEffect(() => {
    if (user) push("/profile")
  }, [push, user])
}
