export const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ?? process.env.NEXT_PUBLIC_BASE_URL2 ?? process.env.NEXT_PUBLIC_VERCEL_URL ?? '';
export const SOCKET_URL = process.env.NEXT_PUBLIC_SOCKET_URL || 'http://localhost:3002';
