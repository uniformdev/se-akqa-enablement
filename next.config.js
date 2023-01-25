/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    projectId: process.env.UNIFORM_PROJECT_ID,
    apiKey: process.env.UNIFORM_API_KEY,
    apiHost: process.env.UNIFORM_CLI_BASE_URL || "https://uniform.app",
    previewSecret: process.env.UNIFORM_PREVIEW_SECRET || "hello-world",
    projectMapId: process.env.UNIFORM_PROJECT_MAP_ID,
    contentfulSpaceId: process.env.CONTENTFUL_SPACE_ID,
    contentfulEnvironment: process.env.CONTENTFUL_ENVIRONMENT || "master",
    contentfulPreviewToken: process.env.CONTENTFUL_CPA_ACCESS_TOKEN,
    contentfulDeliveryToken: process.env.CONTENTFUL_CDA_ACCESS_TOKEN,
    contentstackApiKey: process.env.CONTENTSTACK_API_KEY,
    contentstackDeliveryToken: process.env.CONTENTSTACK_DELIVERY_TOKEN,
    contentstackEnvironment: process.env.CONTENTSTACK_ENVIRONMENT,
    contentstackRegion: process.env.CONTENTSTACK_REGION
  },
};

module.exports = nextConfig;
