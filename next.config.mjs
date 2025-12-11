/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    domains: [
      "image.tmdb.org",     // TMDB posters
      "m.media-amazon.com"  // OMDb posters
    ],
  },
};

export default nextConfig;
