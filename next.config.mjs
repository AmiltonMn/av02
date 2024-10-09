/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dragonball-api.com'
            }
        ]
    },

    rewrites: () => {
  
        return [
            {
                source: "/",
                destination: "/Home"
            },
            {
                source: "/primeira-rota",
                destination: "/primeiraRota"
            },
            {
                source: "/primeira-segunda",
                destination: "/segundaRota"
            }
        ]
    }
};

export default nextConfig;
