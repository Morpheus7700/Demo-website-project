
import type { NextApiRequest, NextApiResponse } from 'next';
import { openDb } from '@/lib/database';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const userRole = req.headers['x-user-role'];
  if (userRole !== 'ADMIN') {
      return res.status(403).json({ message: 'Forbidden: Access is denied.' });
  }

  let db;
  try {
    db = await openDb();
    const users = await db.all('SELECT id, email, role, name, dob, location, bio FROM users');
    res.status(200).json(users);
  } catch (error) {
    console.error('Admin users API error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  } finally {
      if (db) {
          await db.close();
      }
  }
}
