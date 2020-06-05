import Layout from "components/Layout"
import { useUser } from "hooks/useUser"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect } from "react"

const Profile = () => {
  const { user, status } = useUser()
  const { push } = useRouter()
  useEffect(() => {
    if (status === "success" && !user) push("/signin")
  }, [push, status, user])
  return (
    <>
      <Head>Profile</Head>
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
