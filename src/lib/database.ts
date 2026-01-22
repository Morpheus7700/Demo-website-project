
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// This ensures the path is relative to the project root
const DB_PATH = './database.db';

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
