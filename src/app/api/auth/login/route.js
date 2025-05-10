import { connectDB } from '@/lib/database/db'
import User from '@/models/userModel'
import bcrypt from 'bcryptjs'
import { signToken } from '@/lib/auth/auth'
import { serialize } from 'cookie'

export async function POST(req) {
  await connectDB()

  const { email, password } = await req.json()
  const user = await User.findOne({ email })

  // Check if user exists and if the email is verified
  if (!user) {
    return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 401 })
  }

  if (!user.isVerified) {
    return new Response(
      JSON.stringify({ error: 'Please verify your email address to continue.' }),
      { status: 400 }
    )
  }

  // Check password
  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch) {
    return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 401 })
  }

  // Generate token
  const token = signToken({ userId: user._id })

  // Create cookie for storing the token
  const cookie = serialize('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
    sameSite: 'lax',
  })

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: {
      'Set-Cookie': cookie,
      'Content-Type': 'application/json',
    },
  })
}
