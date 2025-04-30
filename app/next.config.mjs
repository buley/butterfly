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
    },
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        styledComponents: true,
    },
};

export default nextConfig;
