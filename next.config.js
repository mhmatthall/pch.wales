/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/(data-protection|dataprotection)",
        destination:
          "https://www.swansea.ac.uk/about-us/compliance/data-protection/research-privacy-notice/",
        basePath: false,
        permanent: true,
      },
      {
        source: "/go/teams",
        destination:
          "https://teams.microsoft.com/l/chat/0/0?users=matthew.hall3@wales.nhs.uk",
        basePath: false,
        permanent: true,
      },
    ];
  },
};