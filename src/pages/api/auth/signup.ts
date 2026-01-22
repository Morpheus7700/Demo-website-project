
import type { NextApiRequest, NextApiResponse } from 'next';
import { openDb } from '@/lib/database';
import { hash } from 'bcryptjs';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email, password } = req.body;

  if (!email || !password || typeof email !== 'string' || typeof password !== 'string' || password.length < 6) {
    return res.status(400).json({ message: 'Invalid input: Password must be at least 6 characters long.' });
  }

  let db;
  try {
    db = await openDb();

    const existingUser = await db.get('SELECT id FROM users WHERE email = ?', email);
    if (existingUser) {
      return res.status(409).json({ message: 'User with this email already exists.' });
    }

    const hashedPassword = await hash(password, 12);

    await db.run('INSERT INTO users (email, password, role) VALUES (?, ?, ?)', [
      email,
      hashedPassword,
      'USER',
    ]);

    res.status(201).json({ message: 'User created successfully.' });
  } catch (error) {
    console.error('Signup API error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  } finally {
      if (db) {
          await db.close();
      }
  }
}
