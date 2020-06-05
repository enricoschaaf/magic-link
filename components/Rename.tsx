import { useUser } from "hooks/useUser"
import { NextPage } from "next"
import { queryCache, useMutation } from "react-query"

async function signOut() {
  const res = await fetch("/api/auth/signout", { method: "POST" })
  const { data } = await res.json()
  return data
}

export const Auth = ({ children }: { children: NextPage }) => {
  const { user } = useUser()
  const [logOutMutation] = useMutation(signOut)
  return (
    <>
      <button
        onClick={async () => {
          await logOutMutation()
          queryCache.setQueryData("user", null)
        }}
      >
        {user ? "Sign out" : "Sign in"}
      </button>
      {children}
    </>
  )
}
