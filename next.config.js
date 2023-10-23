/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/demo-c',
    async redirects() {
        return [
          {
            source: '/',
            destination: '/demo-c',
            permanent: true,
          }
        ]
      },
}

module.exports = nextConfig
