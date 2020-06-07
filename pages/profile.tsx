import Layout from "components/Layout"
import Title from "components/Title"
import { useUser } from "hooks/useUser"
import { useRouter } from "next/router"
import { useEffect } from "react"

const Profile = () => {
  const { user, status } = useUser()
  const { push } = useRouter()
  useEffect(() => {
    console.log({ status, user })
    if (status === "success" && !user) push("/signin")
  }, [push, status, user])
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
