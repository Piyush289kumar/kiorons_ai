import { cookies } from 'next/headers'

export async function POST() {
  cookies().set('token', '', { maxAge: 0, path: '/' })
  return new Response(JSON.stringify({ success: true }))
}
