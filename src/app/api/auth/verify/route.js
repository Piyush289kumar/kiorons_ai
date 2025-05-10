import { connectDB } from '@/lib/database/db'
import User from '@/models/userModel'
import { verifyToken } from '@/lib/auth/auth'

export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const token = searchParams.get('token')

  if (!token) {
    return new Response(JSON.stringify({ error: 'No token provided' }), { status: 400 })
  }

  try {
    // Verify the token
    const decoded = verifyToken(token)

    // Find the user associated with the email in the token
    const user = await User.findOne({ email: decoded.email })
    if (!user) {
      return new Response(JSON.stringify({ error: 'User not found' }), { status: 400 })
    }

    // Update the user's verification status
    user.isVerified = true
    user.verificationToken = null // Clear the verification token after use
    await user.save()

    // Respond with a success message
    return new Response(JSON.stringify({ success: 'Email verified successfully' }))
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Invalid or expired token' }), { status: 400 })
  }
}
