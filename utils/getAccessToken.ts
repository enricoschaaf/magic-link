export async function getAccessToken(_, id: string) {
  const res = await fetch("/api/auth/access/" + id)
  const { data } = await res.json()
  return data
}
