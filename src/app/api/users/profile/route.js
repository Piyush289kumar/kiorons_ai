import { connectDB } from '@/lib/database/db'
import { verifyToken } from '@/lib/auth/auth'
import User from '@/models/userModel'
import { promises as fs } from 'fs'
import path from 'path'

export const PUT = async (req) => {
  try {
    await connectDB()

    // Get cookies from headers
    const cookieHeader = req.headers.get('cookie') || ''
    const cookies = Object.fromEntries(
      cookieHeader.split(';').map(cookie => {
        const [key, value] = cookie.trim().split('=')
        return [key, value]
      })
    )

    const token = cookies.token
    if (!token) {
      return Response.json({ message: 'Authentication token missing' }, { status: 401 })
    }

    let payload
    try {
      payload = verifyToken(token)
    } catch (err) {
      console.error('[Token Verification Error]:', err.message)
      return Response.json({ message: 'Invalid or expired token' }, { status: 401 })
    }

    // Parse form data
    const formData = await req.formData()
    const name = formData.get('name')
    const phone = formData.get('phone')
    const avatarFile = formData.get('avatar')

    const update = {}
    if (name) update.name = name
    if (phone) update.phone = phone

    if (avatarFile) {
      // Create public/users directory if it doesn't exist
      const uploadDir = path.join(process.cwd(), 'public', 'users')
      try {
        await fs.access(uploadDir)
      } catch {
        await fs.mkdir(uploadDir, { recursive: true })
      }

      // Generate unique filename
      const timestamp = Date.now()
      const extension = avatarFile.name.split('.').pop()
      const filename = `user_${payload.userId}_${timestamp}.${extension}`
      const filePath = path.join(uploadDir, filename)

      // Convert file to buffer and save
      const fileBuffer = await avatarFile.arrayBuffer()
      await fs.writeFile(filePath, Buffer.from(fileBuffer))

      // Store relative path in database
      update.avatar = `/users/${filename}`
    }

    const updatedUser = await User.findByIdAndUpdate(payload.userId, update, {
      new: true,
      runValidators: true,
      context: 'query',
    }).select('-password -verificationToken')

    if (!updatedUser) {
      return Response.json({ message: 'User not found' }, { status: 404 })
    }

    return Response.json({ user: updatedUser })
  } catch (err) {
    console.error('[PUT /api/users/profile] Unexpected Error:', err)
    return Response.json({ message: 'Internal Server Error' }, { status: 500 })
  }
}