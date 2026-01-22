
import { NextApiRequest, NextApiResponse } from 'next';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'PUT') {
    res.setHeader('Allow', ['PUT']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const userRole = req.headers['x-user-role'];

  if (userRole !== 'ADMIN') {
    return res.status(403).json({ message: 'Forbidden' });
  }

  try {
    const { id } = req.query;
    const { title, destination, imageUrl, description, price, status } = req.body;

    if (!title || !destination || !price) {
      return res.status(400).json({ message: 'Title, destination, and price are required' });
    }

    const db = await open({
      filename: './database.db',
      driver: sqlite3.Database,
    });

    const result = await db.run(
      'UPDATE trips SET title = ?, destination = ?, imageUrl = ?, description = ?, price = ?, status = ? WHERE id = ?',
      [title, destination, imageUrl, description, price, status, id]
    );

    await db.close();

    if (result.changes === 0) {
        return res.status(404).json({ message: 'Trip not found' });
    }

    res.status(200).json({ id, title, destination, imageUrl, description, price, status });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
