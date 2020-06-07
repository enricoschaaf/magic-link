export async function queryFunction(_key: string, url: RequestInfo) {
  const res = await fetch(url)
  const json = await res.json()
  if (json.data) return json.data
  if (json.error) throw new Error(json.error)
}
