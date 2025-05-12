import { connectDB } from '@/lib/database/db'
import User from '@/models/userModel'

export async function POST(req) {
  await connectDB()
  const { userId, preferences } = await req.json()

  const user = await User.findById(userId)
  if (!user) return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 })

  user.metadata.preferences = preferences
  user.metadata.onboarding.currentStep = 'complete'
  user.metadata.onboarding.stepsCompleted.push('collect-preferences')

  await user.save()
  return new Response(JSON.stringify({ message: 'Preferences saved' }))
}
