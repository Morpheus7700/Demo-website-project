
import { NextApiRequest, NextApiResponse } from 'next';
import { openDb } from '@/lib/database';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const adminRole = req.headers['x-user-role'];
  if (adminRole !== 'ADMIN') {
    return res.status(403).json({ message: 'Forbidden' });
  }

  const { userId, role } = req.body;

  if (!userId || !role) {
    return res.status(400).json({ message: 'User ID and role are required' });
  }

  try {
    const db = await openDb();
    const result = await db.run('UPDATE users SET role = ? WHERE id = ?', [role, userId]);
    await db.close();

    if (result.changes === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User role updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
