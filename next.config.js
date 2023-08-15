/** @type {import('next').NextConfig} */
const { parsed: env } = require('dotenv').config();
const nextConfig = {
	env,
	images: {
		domains: ['live.staticflickr.com'],
	}
}

module.exports = nextConfig