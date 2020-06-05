export async function getUser() {
  const res = await fetch("/api/auth/user")
  const { data } = await res.json()
  return data
}
