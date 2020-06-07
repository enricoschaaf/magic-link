import Title from "components/Title"
import { useAuth } from "hooks/useAuth"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useMutation, useQuery } from "react-query"
import { getAccessToken } from "utils/getAccessToken"

async function handleSubmit({ e, signUpMutation }) {
  e.preventDefault()
  signUpMutation({ email: e.target.email.value })
}

async function signUp({ email }) {
  const res = await fetch("/api/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email })
  })
  const { data } = await res.json()
  return data
}

const SignUp = () => {
  useAuth()
  const { push } = useRouter()
  const [signUpMutation, { data: signUpData }] = useMutation(signUp)
  const { data } = useQuery(
    signUpData && ["accessToken", signUpData.id],
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
      <Title>Sign up</Title>
      <form onSubmit={e => handleSubmit({ e, signUpMutation })}>
        <input id="email" type="text" placeholder="Email address" />
        <button type="submit">Sign up</button>
      </form>
    </>
  )
}

export default SignUp
