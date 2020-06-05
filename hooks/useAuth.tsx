import { useRouter } from "next/router"
import { useEffect } from "react"
import { queryCache, useQuery } from "react-query"
import { getUser } from "utils/getUser"

export function useAuth() {
  const { data } = useQuery(!queryCache.getQueryData("user") && "user", getUser)
  const { push } = useRouter()
  useEffect(() => {
    if (data || queryCache.getQueryData("user")) push("/profile")
  }, [data, push])
}
