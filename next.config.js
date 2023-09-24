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
        source: "/go/s03-teams-msg",
        destination:
          "https://teams.microsoft.com/l/chat/0/0?users=matthew.hall3@wales.nhs.uk?message=Hi%20Matt!%20I%27m%20interested%20in%20your%20study.",
        basePath: false,
        permanent: true,
      },
    ];
  },
};