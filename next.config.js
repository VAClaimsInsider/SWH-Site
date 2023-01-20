require('dotenv').config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images: {
	// 	domains: ['cdn.sanity.io'],
	// 	loader: 'custom'
  // },
  env: {
    SANITY_AUTH_TOKEN: process.env.SANITY_AUTH_TOKEN,
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
    SANITY_DATASET: process.env.SANITY_DATASET,
  },
	webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}

module.exports = nextConfig
