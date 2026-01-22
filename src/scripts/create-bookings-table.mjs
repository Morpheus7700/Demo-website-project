
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const DB_PATH = './database.db';

async function createBookingsTable() {
  console.log(`Opening database connection to ${DB_PATH}...`);
  const db = await open({
    filename: DB_PATH,
    driver: sqlite3.Database,
  });

  console.log('Creating the \'bookings\' table...');
  await db.exec(`
    CREATE TABLE IF NOT EXISTS bookings (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      trip_id INTEGER NOT NULL,
      booking_date TEXT NOT NULL,
      FOREIGN KEY (user_id) REFERENCES users (id),
      FOREIGN KEY (trip_id) REFERENCES trips (id)
    );
  `);
  console.log("'bookings' table created successfully (if it didn't exist).");

  // Insert some sample data
  const bookings = [
    {
      user_id: 1, // Assuming user with ID 1 exists (admin)
      trip_id: 1, // Himalayan Odyssey
      booking_date: '2025-08-01',
    },
    {
      user_id: 1, // Assuming user with ID 1 exists (admin)
      trip_id: 2, // Coastal Wonders
      booking_date: '2025-10-10',
    },
  ];

  const insertBooking = await db.prepare('INSERT OR IGNORE INTO bookings (id, user_id, trip_id, booking_date) VALUES (?, ?, ?, ?)');

  for (const booking of bookings) {
    await insertBooking.run(null, booking.user_id, booking.trip_id, booking.booking_date);
  }

  await insertBooking.finalize();

  console.log('Sample booking data inserted.');

  await db.close();
  console.log('Database connection closed.');
}

createBookingsTable().catch((err) => {
  console.error('❌ Error creating bookings table:', err);
  process.exit(1);
});
