import Auth from "components/Auth"
import Layout from "components/Layout"
import { useUser } from "hooks/useUser"
import { useRouter } from "next/router"
import { useEffect } from "react"

const Profile = () => {
  const user = useUser()
  const { push } = useRouter()
  useEffect(() => {
    if (!user) push("/signin")
  }, [push, user])
  return (
    <Auth>
      <Layout>
        <span>
          <span>Email: </span>
          <span>{user?.email}</span>
        </span>
      </Layout>
    </Auth>
  )
}
export default Profile
