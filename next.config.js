/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/dataprotection',
        destination: 'https://www.swansea.ac.uk/about-us/compliance/data-protection/research-privacy-notice/',
        basePath: false,
        permanent: true,
      },
      {
        source: '/data-protection',
        destination: 'https://www.swansea.ac.uk/about-us/compliance/data-protection/research-privacy-notice/',
        basePath: false,
        permanent: true,
      },
    ]
  },
};

// Note: must restart server on change