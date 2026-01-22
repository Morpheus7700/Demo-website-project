
import { NextApiRequest, NextApiResponse } from 'next';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'DELETE') {
    res.setHeader('Allow', ['DELETE']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const userRole = req.headers['x-user-role'];

  if (userRole !== 'ADMIN') {
    return res.status(403).json({ message: 'Forbidden' });
  }

  try {
    const { id } = req.query;

    const db = await open({
      filename: './database.db',
      driver: sqlite3.Database,
    });

    const result = await db.run('DELETE FROM trips WHERE id = ?', id);

    await db.close();

    if (result.changes === 0) {
        return res.status(404).json({ message: 'Trip not found' });
    }

    res.status(200).json({ message: 'Trip deleted successfully' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
