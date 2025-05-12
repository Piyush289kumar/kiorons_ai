import { connectDB } from '@/lib/database/db'
import User from '@/models/userModel'


export async function POST(req) {
  await connectDB()
  const { userId, intent } = await req.json()

  const user = await User.findById(userId)
  if (!user) return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 })

  user.metadata.intent = intent
  user.metadata.onboarding.currentStep = 'collect-preferences'
  user.metadata.onboarding.stepsCompleted.push('collect-intent')

  await user.save()
  return new Response(JSON.stringify({ message: 'Intent saved' }))
}
