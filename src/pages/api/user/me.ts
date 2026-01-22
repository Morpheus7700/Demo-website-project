import type { NextApiRequest, NextApiResponse } from 'next';
import { openDb } from '@/lib/database';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
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

  let db;
  try {
    db = await openDb();
    const user = await db.get('SELECT name FROM users WHERE id = ?', userId);
    
    if (!user) {
        return res.status(404).json({ message: 'User not found.' });
    }

    res.status(200).json({ userId, role: userRole, name: user.name });
  } catch (error) {
    console.error('Me API error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    if (db) {
        await db.close();
    }
  }
}
