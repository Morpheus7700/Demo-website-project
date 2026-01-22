
import { NextApiRequest, NextApiResponse } from 'next';
import { openDb } from '@/lib/database';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const userId = req.headers['x-user-id'];

  if (!userId) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const db = await openDb();
    const bookings = await db.all('SELECT trip_id FROM bookings WHERE user_id = ?', userId);
    const tripIds = bookings.map((b: any) => b.trip_id);

    if (tripIds.length === 0) {
      return res.status(200).json([]);
    }

    const trips = await db.all(`SELECT * FROM trips WHERE id IN (${tripIds.join(',')})`);

    await db.close();

    res.status(200).json(trips);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
