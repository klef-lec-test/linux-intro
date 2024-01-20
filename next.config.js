/** @type {import('next').NextConfig} */
module.exports = {
  // ...
  webpack: (config, { isServer}) => {
    config.experimental = {
      asyncWebAssembly: true,
    };
  },
}