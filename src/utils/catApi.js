// cataas.com: GET /cat/{tag}?json=true -> { id, tags, url, ... }
const API = 'https://cataas.com'
const TIMEOUT_MS = 8000

async function getJSON(path) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)
  try {
    const response = await fetch(`${API}${path}`, { signal: controller.signal })
    if (!response.ok) throw new Error(`cataas responded ${response.status}`)
    return await response.json()
  } finally {
    clearTimeout(timer)
  }
}

// Random cat with the tag, or any random cat if the tag has none
export async function fetchCat(tag) {
  let data
  try {
    data = await getJSON(`/cat/${encodeURIComponent(tag)}?json=true`)
  } catch (error) {
    // Timeout / no network: don't retry
    if (error.name === 'AbortError' || error instanceof TypeError) throw error
    data = await getJSON('/cat?json=true')
  }

  if (typeof data?.id !== 'string') throw new Error('Unexpected cataas response')
  return {
    id: data.id,
    imageUrl: `${API}/cat/${data.id}`,
    tags: Array.isArray(data.tags) ? data.tags : [],
  }
}

export function catImage(imageUrl, width) {
  return `${imageUrl}?width=${width}`
}
