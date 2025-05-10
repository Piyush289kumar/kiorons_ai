import { verifyToken } from '@/lib/auth/auth'
import User from '@/models/userModel'
import { connectDB } from '@/lib/database/db'
import { redirect } from 'next/navigation'

export default async function VerifyPage({ params }) {
  const { token } = await getParams(params)
  await connectDB()

  try {
    const { userId } = verifyToken(token)
    const user = await User.findOne({ email: userId })

    if (!user) return <p>User not found</p>
    if (user.isVerified) return <p>Email already verified!</p>

    user.isVerified = true
    user.verificationToken = undefined
    await user.save()

    redirect('/login') // ✅ redirect after verification
  } catch (err) {
    console.error(err)
    return <p>Invalid or expired verification link.</p>
  }
}

async function getParams(params) {
  return params
}
