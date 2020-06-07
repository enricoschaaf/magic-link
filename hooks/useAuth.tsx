import { useRouter } from "next/router"
import { useEffect } from "react"
import { queryCache, useQuery } from "react-query"
import { queryFunction } from "utils/queryFunction"

export function useAuth() {
  const { status, data } = useQuery(
    !queryCache.getQueryData(["user", "/api/auth/user"]) && [
      "user",
      "/api/auth/user"
    ],
    queryFunction,
    {
      refetchOnWindowFocus: false,
      retry: false
    }
  )
  const { push } = useRouter()
  useEffect(() => {
    if (
      queryCache.getQueryData(["user", "/api/auth/user"]) ||
      (status === "success" && !data)
    ) {
      push("/profile")
    }
  }, [data, push, status])
}
