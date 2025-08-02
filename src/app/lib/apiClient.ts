// /src/lib/apiClient.ts
export async function fetchJobs() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/jobs');
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
}
