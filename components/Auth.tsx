import { useUser } from "hooks/useUser"
import { UserContext } from "utils/Context"

const Auth = ({ children }) => {
  const user = useUser()
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}

export default Auth
