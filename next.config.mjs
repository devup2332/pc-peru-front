/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "images.unsplash.com",
			},
			{
				hostname: "i.blogs.es",
			},
		],
	},
};

export default nextConfig;
