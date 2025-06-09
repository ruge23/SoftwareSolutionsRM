import createNextIntlPlugin from 'next-intl/plugin';

const withNextInt = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextInt(nextConfig);
