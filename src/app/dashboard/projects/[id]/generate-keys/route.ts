export const runtime = 'nodejs'

import { NextResponse } from 'next/server'
import { generateSupabaseJWT } from '@/lib/server/jwt'

export async function POST(req: Request) {
  const { jwtSecret } = await req.json()

  const anonKey = generateSupabaseJWT('anon', jwtSecret)
  const serviceKey = generateSupabaseJWT('service_role', jwtSecret)

  return NextResponse.json({
    anonKey,
    serviceKey,
  })
}
