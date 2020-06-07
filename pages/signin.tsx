import Title from "components/Title"
import { useAuth } from "hooks/useAuth"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useMutation, useQuery } from "react-query"
import { queryFunction } from "utils/queryFunction"

async function handleSubmit({ e, signInMutation }) {
  e.preventDefault()
  await signInMutation({ email: e.target.email.value })
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

const SignIn = () => {
  useAuth()
  const { push } = useRouter()
  const [signInMutation, { data: signInData }] = useMutation(signIn)
  const { data: accessTokenData } = useQuery(
    signInData && ["accessToken", "/api/auth/access/" + signInData.id],
    queryFunction,
    {
      refetchInterval: 500
    }
  )
  useEffect(() => {
    if (accessTokenData?.confirmed) {
      push("/profile")
    }
  }, [accessTokenData?.confirmed, push])
  return (
    <>
      <Title>Sign in</Title>
      <form onSubmit={e => handleSubmit({ e, signInMutation })}>
        <input id="email" type="text" placeholder="Email address" />
        <button type="submit">Sign in</button>
      </form>
    </>
  )
}

export default SignIn
