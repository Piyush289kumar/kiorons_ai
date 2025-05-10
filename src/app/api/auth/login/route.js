import { connectDB } from '@/lib/database/db'
import User from '@/models/userModel'
import bcrypt from 'bcryptjs'
import { signToken } from '@/lib/auth/auth'
import { cookies } from 'next/headers'

export async function POST(req) {
  await connectDB()
  const { email, password } = await req.json()
  const user = await User.findOne({ email })

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 401 })
  }

  const token = signToken({ userId: user._id })
  cookies().set('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  })

  return new Response(JSON.stringify({ success: true }))
}
