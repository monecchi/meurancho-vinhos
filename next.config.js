/** @type {import('next').NextConfig} */
const runtimeCaching = require('next-pwa/cache')
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development',
  },
};

const withPWA = require('next-pwa')({
  dest: 'public',
	runtimeCaching,
  // disable: process.env.NODE_ENV === 'development',
  register: true,
});

module.exports = withPWA(nextConfig);

// const runtimeCaching = require('next-pwa/cache')
// const withPWA = require("next-pwa")({
//   dest: "public",
// 	runtimeCaching,
//   // put other next-pwa options here
// });

// const nextConfig = withPWA({
//   reactStrictMode: true,
//   // put other next js options here
// });

// module.exports = nextConfig;
