import jwt from 'jsonwebtoken'

const SECRET = process.env.JWT_SECRET

export function signToken(payload) {
  return jwt.sign(payload, SECRET, { expiresIn: '7d' })
}

export function verifyToken(token) {
  if (!SECRET) throw new Error('JWT_SECRET not set')
  return jwt.verify(token, SECRET)
}

export function signVerificationToken(userId) {
  return jwt.sign({ userId }, SECRET, { expiresIn: '1d' }) // 1-day expiration for verification
}
