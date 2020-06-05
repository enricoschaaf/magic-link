import { useQuery } from "react-query"

async function getUser() {
  const res = await fetch("/api/auth/user")
  const { data } = await res.json()
  return data
}

export function useUser() {
  const { data } = useQuery("user", getUser)
  return data
}
