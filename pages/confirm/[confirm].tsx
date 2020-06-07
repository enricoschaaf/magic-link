import Title from "components/Title"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useMutation } from "react-query"

async function confirmSignIn({ confirm }) {
  const res = await fetch("/api/auth/confirm", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ confirm })
  })
  const json = await res.json()
  if (json.error) throw new Error(json.error)
  return json.data
}

const Confirm = () => {
  const {
    query: { confirm }
  } = useRouter()
  const [mutation, { status }] = useMutation(confirmSignIn)
  useEffect(() => {
    if (typeof confirm === "string") {
      mutation({ confirm })
    }
  }, [confirm, mutation])
  return (
    <>
      <Title>Confirm your sign in</Title>
      {status === "loading" ? (
        <div>loading</div>
      ) : status === "error" ? (
        <div>error</div>
      ) : (
        <div>success</div>
      )}
    </>
  )
}

export default Confirm
