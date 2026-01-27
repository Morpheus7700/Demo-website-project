
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

import fs from 'fs';
import path from 'path';

// Determine the database path. 
// In production (Cloud Run), we must use /tmp which is writable.
// In development, we can use the local file.
let DB_PATH = './database.db';

if (process.env.NODE_ENV === 'production') {
  const PROD_DB_PATH = '/tmp/database.db';
  // Copy the database to /tmp if it doesn't exist
  if (!fs.existsSync(PROD_DB_PATH)) {
    try {
      // We copy from the built source location to /tmp
      // Note: In Next.js standalone, the file structure might place database.db in specific spots.
      // We assume it's in the root of the working directory.
      fs.copyFileSync(path.resolve('./database.db'), PROD_DB_PATH);
      console.log('Database copied to writable /tmp directory.');
    } catch (e) {
      console.error('Failed to copy database to /tmp:', e);
      // Fallback (might fail if read-only)
    }
  }
  DB_PATH = PROD_DB_PATH;
}

/**
 * Opens a new connection to the SQLite database.
 * This is intended to be called and closed on a per-request basis in API routes.
 * @returns A promise that resolves to the database instance.
 */
export async function openDb() {
  return open({
    filename: DB_PATH,
    driver: sqlite3.Database,
  });
}
