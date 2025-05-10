import { connectDB } from '@/lib/database/db'
import User from '@/models/userModel'
import bcrypt from 'bcryptjs'

export async function POST(req) {
  await connectDB()
  const { email, password } = await req.json()

  const existing = await User.findOne({ email })
  if (existing) {
    return new Response(JSON.stringify({ error: 'User exists' }), { status: 400 })
  }

  const hashed = await bcrypt.hash(password, 10)
  const user = await User.create({ email, password: hashed })

  return new Response(JSON.stringify({ success: true, userId: user._id }))
}
