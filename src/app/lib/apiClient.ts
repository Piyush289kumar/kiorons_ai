// /src/lib/apiClient.ts

const baseApi = "http://localhost:8000";

export async function fetchNewsBlogs(limit = 3) {
  const res = await fetch(`${baseApi}/api/b/news/limits?limit=${limit}`);
  if (!res.ok) throw new Error("Failed to fetch blogs");
  const blogs = await res.json();
  return { data: blogs }; // ✅ wrap the array
}

export async function fetchThinkBlogs(limit = 3) {
  const res = await fetch(`${baseApi}/api/b/think/limits?limit=${limit}`);
  if (!res.ok) throw new Error("Failed to fetch blogs");
  const blogs = await res.json();
  return { data: blogs }; // ✅ wrap the array
}

export async function fetchStudieskBlogs(limit = 3) {
  const res = await fetch(`${baseApi}/api/b/studies/limits?limit=${limit}`);
  if (!res.ok) throw new Error("Failed to fetch blogs");
  const blogs = await res.json();
  return { data: blogs }; // ✅ wrap the array
}


export async function fetchResourcesBlogs(limit = 3) {
  const res = await fetch(`${baseApi}/api/b/resources/limits?limit=${limit}`);
  if (!res.ok) throw new Error("Failed to fetch blogs");
  const blogs = await res.json();
  return { data: blogs }; // ✅ wrap the array
}
