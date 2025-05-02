const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL

export async function client(endpoint, { body, ...customConfig } = {}) {
  const headers = {
    'Content-Type': 'application/json',
  }

  const config = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  }

  if (body) {
    config.body = JSON.stringify(body)
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, config)

  if (!response.ok) {
    const error = new Error('An error occurred while fetching the data.')
    error.info = await response.json()
    error.status = response.status
    throw error
  }

  return response.json()
}
