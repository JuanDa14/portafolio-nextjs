/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	compiler: {},
	images: {
		domains: ['cloudinary.com'],
	},
};

module.exports = nextConfig;
