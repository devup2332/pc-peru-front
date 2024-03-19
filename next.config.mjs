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
			{
				hostname: "http2.mlstatic.com",
			},
		],
	},
};

export default nextConfig;
