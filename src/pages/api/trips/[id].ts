
import { NextApiRequest, NextApiResponse } from 'next';
import { openDb } from '@/lib/database';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      const db = await openDb();
      const trip = await db.get('SELECT * FROM trips WHERE id = ?', id);
      await db.close();

      if (trip) {
        res.status(200).json(trip);
      } else {
        res.status(404).json({ message: `Trip with id ${id} not found` });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
