
import type { NextApiRequest, NextApiResponse } from 'next';
import { openDb } from '@/lib/database';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const userId = req.headers['x-user-id'];

  if (!userId) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  let db;
  try {
    db = await openDb();

    if (req.method === 'GET') {
      const details = await db.get(
        'SELECT name, dob, location, bio FROM users WHERE id = ?',
        userId
      );
      if (!details) {
        return res.status(404).json({ message: 'User details not found.' });
      }
      return res.status(200).json(details);
    }

    if (req.method === 'PUT') {
      const { name, dob, location, bio } = req.body;
      await db.run(
        'UPDATE users SET name = ?, dob = ?, location = ?, bio = ? WHERE id = ?',
        [name, dob, location, bio, userId]
      );
      return res.status(200).json({ message: 'Details updated successfully.' });
    }
    
    res.setHeader('Allow', ['GET', 'PUT']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);

  } catch (error) {
    console.error('User details API error:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    if (db) {
      await db.close();
    }
  }
}
