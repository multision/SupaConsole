/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['@prisma/client'],
  experimental: {
    externalDir: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  webpack: (config) => {
    // Exclude supabase directories from build
    config.module.rules.push({
      test: /\.tsx?$/,
      exclude: [/supabase-core/, /supabase-projects/],
    })
    return config
  },
}

module.exports = nextConfig