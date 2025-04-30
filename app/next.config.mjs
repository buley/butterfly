/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        serverActions: {
            experimentalServerActions: true,
        }
    },
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'images.unsplash.com',
            port: '',
            pathname: '/**',
        }, {
            protocol: 'https',
            hostname: 'cdn.pixabay.com',
            port: '',
            pathname: '/**',
        }, {
            protocol: 'https',
            hostname: 'images.pexels.com',
            port: '',
            pathname: '/**',
        }, {
            protocol: 'https',
            hostname: 'cdn.shopify.com',
            port: '',
            pathname: '/**',
        }, {
            protocol: 'https',
            hostname: 'placehold.co',
            port: '',
            pathname: '/**',
        }],
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; img-src 'self' data: https://images.unsplash.com https://cdn.pixabay.com https://images.pexels.com https://cdn.shopify.com https://placehold.co; style-src 'self' 'unsafe-inline';",
        unoptimized: true,
    },
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        styledComponents: true,
    },
};

export default nextConfig;
