export default async function fetchToAPI(url: string, method: string, bodyData?: Object) {
  return fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'max-age=31536000',
    },
    body: JSON.stringify(bodyData),
  }).then(async (response) => {
    const data = await response.json()
    if (data.success) {
      return data
    }
    return null
  })
}
