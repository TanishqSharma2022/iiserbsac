/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    images: {
        unoptimized: true
        // remotePatterns: [
        //     {
        //         protocol: 'https',
        //         hostname: 'picsum.photos',
        //         port: '',
        //         pathname: '/500',
        //     },
        // ],
    },
   basePath: '/armageddon',
      
};

export default nextConfig;