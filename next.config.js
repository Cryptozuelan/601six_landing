const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([], {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ibb.co',
        port: '',
        pathname: 'ibb.co',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: 'i.ibb.co',
      },
    ],
  },
  images: {
    domains: ['i.ibb.co'],
},
});
