import { verifyToken } from '@/lib/auth/auth'
import { cookies } from 'next/headers'

export function withAuth(handler) {
  return async function (req) {
    const token = cookies().get('token')?.value
    if (!token) return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 })

    try {
      const user = verifyToken(token)
      req.user = user
      return handler(req)
    } catch (e) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 })
    }
  }
}
