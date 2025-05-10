import { connectDB } from '@/lib/database/db'
import User from '@/models/userModel'
import bcrypt from 'bcryptjs'
import { signVerificationToken } from '@/lib/auth/auth'  // Make sure this function is created
import { sendVerificationEmail } from '@/lib/email/sendEmail'  // Ensure you have this helper to send emails

export async function POST(req) {
  await connectDB()
  const { email, password } = await req.json()

  // Check if the user already exists
  const existing = await User.findOne({ email })
  if (existing) {
    return new Response(JSON.stringify({ error: 'User exists' }), { status: 400 })
  }

  // Hash the password
  const hashed = await bcrypt.hash(password, 12)

  // Create a new user and generate a verification token
  const verificationToken = signVerificationToken(email)

  const user = await User.create({
    email,
    password: hashed,
    verificationToken,
  })

  // Send the verification email
  await sendVerificationEmail(email, verificationToken)

  return new Response(JSON.stringify({ success: true, userId: user._id }))
}
