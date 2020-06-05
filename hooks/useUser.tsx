import { useQuery } from "react-query"
import { getUser } from "utils/getUser"

export function useUser() {
  const { data, status } = useQuery("user", getUser)
  return { user: data, status }
}
