import { connectDB } from '@/lib/database/db'
import User from '@/models/userModel'

export async function POST(req) {
  await connectDB()
  const { userId } = await req.json()

  const user = await User.findById(userId).select('metadata.onboarding')
  if (!user) return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 })

  return new Response(JSON.stringify({ onboarding: user.metadata.onboarding }))
}
