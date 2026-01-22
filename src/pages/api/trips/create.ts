
import { NextApiRequest, NextApiResponse } from 'next';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const userRole = req.headers['x-user-role'];

  if (userRole !== 'ADMIN') {
    return res.status(403).json({ message: 'Forbidden' });
  }

  try {
    const { title, destination, imageUrl, description, price, status } = req.body;

    if (!title || !destination || !price) {
      return res.status(400).json({ message: 'Title, destination, and price are required' });
    }

    const db = await open({
      filename: './database.db',
      driver: sqlite3.Database,
    });

    const result = await db.run(
      'INSERT INTO trips (title, destination, imageUrl, description, price, status) VALUES (?, ?, ?, ?, ?, ?)',
      [title, destination, imageUrl, description, price, status || 'Draft']
    );

    await db.close();

    res.status(201).json({ id: result.lastID, title, destination, price, status });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
