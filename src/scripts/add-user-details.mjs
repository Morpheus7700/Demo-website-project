
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

async function migrate() {
  console.log("Opening database to migrate...");
  const db = await open({
    filename: './database.db',
    driver: sqlite3.Database,
  });

  console.log("Adding new columns to 'users' table...");
  const columns = [
    { name: 'name', type: 'TEXT' },
    { name: 'dob', type: 'TEXT' },
    { name: 'location', type: 'TEXT' },
    { name: 'bio', type: 'TEXT' }
  ];

  for (const column of columns) {
    try {
      await db.exec(`ALTER TABLE users ADD COLUMN ${column.name} ${column.type}`);
      console.log(`- Added column '${column.name}'`);
    } catch (e) {
      if (e.message.includes('duplicate column name')) {
        console.log(`- Column '${column.name}' already exists. Skipping.`);
      } else {
        throw e;
      }
    }
  }

  console.log("Migration complete.");
  await db.close();
}

migrate().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
