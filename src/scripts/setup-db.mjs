
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { hash } from 'bcryptjs';

// Ensure path is relative to project root where the script is run
const DB_PATH = './database.db';

async function setup() {
  console.log(`Opening database connection to ${DB_PATH}...`);
  const db = await open({
    filename: DB_PATH,
    driver: sqlite3.Database,
  });

  console.log('Migrating the database...');
  // Use IF NOT EXISTS to prevent errors on subsequent runs
  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      role TEXT NOT NULL DEFAULT 'USER'
    );
  `);
  console.log('Database migrated successfully.');

  const adminEmail = 'admin@example.com';
  const adminExists = await db.get('SELECT id FROM users WHERE email = ?', adminEmail);

  if (!adminExists) {
    console.log('Admin user not found. Creating a new one...');
    // Generate a more secure random password
    const adminPassword = Math.random().toString(36).substring(2, 10);
    const hashedPassword = await hash(adminPassword, 12); // Use a higher salt round

    await db.run('INSERT INTO users (email, password, role) VALUES (?, ?, ?)', [
      adminEmail,
      hashedPassword,
      'ADMIN',
    ]);

    console.log('---');
    console.log('✅ Admin user created successfully!');
    console.log('---');
    console.log('🔒 ADMIN CREDENTIALS (save these securely):');
    console.log(`   Email: ${adminEmail}`);
    console.log(`   Password: ${adminPassword}`);
    console.log('---');
  } else {
    console.log('Admin user already exists. Skipping creation.');
  }

  await db.close();
  console.log('Database connection closed.');
}

setup().catch((err) => {
  console.error('❌ Error setting up the database:', err);
  process.exit(1);
});
