import { verifyToken } from '@/lib/auth/auth'
import { cookies } from 'next/headers'
import { connectDB } from '@/lib/database/db'
import User from '@/models/userModel'

export async function GET() {
  await connectDB()
  const token = cookies().get('token')?.value

  if (!token) return new Response(JSON.stringify({ user: null }), { status: 401 })

  try {
    const decoded = verifyToken(token)
    const user = await User.findById(decoded.userId).select('-password')
    return new Response(JSON.stringify({ user }), { status: 200 })
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Invalid token' }), { status: 401 })
  }
}
