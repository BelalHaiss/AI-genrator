const nextTranslate = require('next-translate-plugin');

const config = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'marketplace.canva.com'
      }
    ]
  }
};
module.exports = nextTranslate(config);
