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
                source: "/segunda-rota",
                destination: "/segundaRota"
            },
            {
                source: "/terceira-rota",
                destination: "/terceiraRota"
            }
        ]
    }
};

export default nextConfig;
