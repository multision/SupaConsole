import 'server-only'
import jwt from 'jsonwebtoken'

export function generateSupabaseJWT(
  role: 'anon' | 'service_role',
  jwtSecret: string
) {
  return jwt.sign(
    {
      role,
      iss: 'supabase',
    },
    jwtSecret,
    {
      algorithm: 'HS256',
      expiresIn: '1y',
    }
  )
}
