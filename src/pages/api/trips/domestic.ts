
import { NextApiRequest, NextApiResponse } from 'next';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const db = await open({
        filename: './database.db',
        driver: sqlite3.Database,
      });

      const trips = await db.all("SELECT * FROM trips WHERE category = 'Domestic' AND status = 'Published'");

      await db.close();

      res.status(200).json(trips);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
