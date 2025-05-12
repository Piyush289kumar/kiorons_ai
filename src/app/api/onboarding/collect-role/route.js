import { connectDB } from '@/lib/database/db'
import User from '@/models/userModel'

export async function POST(req) {
  await connectDB()
  const { userId, role } = await req.json()

  const user = await User.findById(userId)
  if (!user) return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 })

  user.metadata.role = role
  user.metadata.onboarding.currentStep = 'collect-intent'
  user.metadata.onboarding.stepsCompleted.push('collect-role')

  await user.save()
  return new Response(JSON.stringify({ message: 'Role saved' }))
}
