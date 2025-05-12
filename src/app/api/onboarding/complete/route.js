import { connectDB } from '@/lib/database/db'
import User from '@/models/userModel'

export async function POST(req) {
  await connectDB()
  const { userId } = await req.json()

  const user = await User.findById(userId)
  if (!user) return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 })

  user.metadata.onboarding.completedAt = new Date()
  user.metadata.onboarding.status = 'completed'
  user.metadata.onboarding.stepsCompleted.push('complete')

  await user.save()
  return new Response(JSON.stringify({ message: 'Onboarding completed' }))
}
