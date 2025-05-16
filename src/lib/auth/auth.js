import jwt from 'jsonwebtoken'

const SECRET = process.env.JWT_SECRET || 'default-secret-for-development'

export function signToken(payload) {
  return jwt.sign(payload, SECRET, { expiresIn: '7d' })
}

export function verifyToken(token) {
  return jwt.verify(token, SECRET)
}

// Empty session function since auth is disabled
export async function getSession() {
  return { userId: 'anonymous' } // Return a dummy session
}