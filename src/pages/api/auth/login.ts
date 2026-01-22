
import type { NextApiRequest, NextApiResponse } from 'next';
import { openDb } from '@/lib/database';
import { compare } from 'bcryptjs';
import { SignJWT } from 'jose'; // Use jose for signing, consistent with middleware
import { serialize } from 'cookie';

// The secret must be a Uint8Array for jose
const JWT_SECRET = new TextEncoder().encode('this-is-a-super-secret-key-that-should-be-in-env-vars');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  let db;
  try {
    db = await openDb();
    const user = await db.get('SELECT * FROM users WHERE email = ?', email);

    if (!user) {
      // Use a generic message to prevent email enumeration
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    // Create JWT with jose, consistent with middleware
    const token = await new SignJWT({ userId: user.id, role: user.role })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('1h')
      .sign(JWT_SECRET);

    const cookie = serialize('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      maxAge: 3600, // 1 hour
      path: '/',
    });

    res.setHeader('Set-Cookie', cookie);
    res.status(200).json({ message: 'Login successful.', role: user.role });

  } catch (error) {
    console.error('Login API error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    if (db) {
      await db.close();
    }
  }
}
