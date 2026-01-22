import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  // The middleware has already verified the token and attached user data to headers
  const userId = req.headers['x-user-id'];
  const userRole = req.headers['x-user-role'];

  if (!userId || !userRole) {
    // This case should ideally not be reached if middleware is configured correctly
    return res.status(401).json({ message: 'Unauthorized: No user data found.' });
  }

  res.status(200).json({ userId, role: userRole });
}
