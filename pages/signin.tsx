import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useMutation, useQuery } from "react-query"

async function handleSubmit({ e, signInMutation }) {
  e.preventDefault()
  signInMutation({ email: e.target.email.value })
}

async function signIn({ email }) {
  const res = await fetch("/api/auth/signin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email })
  })
  const { data } = await res.json()
  return data
}

async function getAccessToken(_, id) {
  const res = await fetch("/api/auth/access/" + id)
  const { data } = await res.json()
  return data
}

const SignIn = () => {
  const { push } = useRouter()
  const [signInMutation, { data: signInData }] = useMutation(signIn)
  const { data } = useQuery(
    signInData && ["accessToken", signInData.id],
    getAccessToken,
    {
      refetchInterval: 500
    }
  )
  useEffect(() => {
    if (data?.confirmed) {
      push("/profile")
    }
  }, [data?.confirmed, push])
  return (
    <>
      <Head>
        <title>Sign in</title>
      </Head>
      <form onSubmit={e => handleSubmit({ e, signInMutation })}>
        <input id="email" type="text" placeholder="Email address" />
        <button type="submit">Sign in</button>
      </form>
    </>
  )
}

export default SignIn
