import Link from "next/link"
import { useRouter } from "next/router"
import { queryCache, useMutation } from "react-query"

async function signOut() {
  const res = await fetch("/api/auth/signout", { method: "POST" })
  const { data } = await res.json()
  return data
}

const Layout = ({ children }) => {
  const { push } = useRouter()
  const [logOutMutation] = useMutation(signOut)
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Homepage</a>
            </Link>
          </li>
          <li>
            <Link href="/signup">
              <a>Sign up</a>
            </Link>
          </li>
          <li>
            <Link href="/signin">
              <a>Sign in</a>
            </Link>
          </li>
          <li>
            <Link href="/profile">
              <a>Profile</a>
            </Link>
          </li>
          <li>
            <button
              onClick={async () => {
                await logOutMutation()
                queryCache.removeQueries("user")
                queryCache.removeQueries("accessToken")
                push("/")
              }}
            >
              Sign out
            </button>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </>
  )
}

export default Layout
