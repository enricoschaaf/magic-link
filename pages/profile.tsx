import Layout from "components/Layout"
import Title from "components/Title"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useQuery } from "react-query"
import { queryFunction } from "utils/queryFunction"

const Profile = () => {
  const { data: user, status } = useQuery(
    ["user", "/api/auth/user"],
    queryFunction,
    { retry: false }
  )
  const { push } = useRouter()
  useEffect(() => {
    if (status === "error") push("/signin")
  }, [push, status])
  return (
    <>
      <Title>Profile</Title>
      <Layout>
        <span>
          <span>Email: </span>
          <span>{user?.email}</span>
        </span>
      </Layout>
    </>
  )
}
export default Profile
