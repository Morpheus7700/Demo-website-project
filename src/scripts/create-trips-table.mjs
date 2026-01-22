
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const DB_PATH = './database.db';

async function createTripsTable() {
  console.log(`Opening database connection to ${DB_PATH}...`);
  const db = await open({
    filename: DB_PATH,
    driver: sqlite3.Database,
  });

  console.log('Creating the \'trips\' table...');
  await db.exec(`
    CREATE TABLE IF NOT EXISTS trips (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      destination TEXT NOT NULL,
      imageUrl TEXT,
      description TEXT,
      price REAL NOT NULL,
      status TEXT NOT NULL DEFAULT 'Draft',
      category TEXT NOT NULL DEFAULT 'Domestic' 
    );
  `);
  console.log("'trips' table created successfully (if it didn't exist).");

  try {
    await db.exec("ALTER TABLE trips ADD COLUMN category TEXT NOT NULL DEFAULT 'Domestic'");
    console.log("Added 'category' column to 'trips' table.");
  } catch (e) {
    if (e.message.includes('duplicate column name')) {
      console.log("'category' column already exists. Skipping.");
    } else {
      throw e;
    }
  }

  // Insert some sample data
  const trips = [
    {
      title: "Himalayan Odyssey",
      destination: "Manali, Leh, Srinagar",
      imageUrl: "https://images.unsplash.com/photo-1580252434888-342143969a12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "A thrilling journey through the majestic Himalayas.",
      price: 1200,
      status: "Published",
      category: "Domestic",
    },
    {
      title: "Coastal Wonders",
      destination: "Goa, Gokarna, Hampi",
      imageUrl: "https://images.unsplash.com/photo-1593642532454-233c7a4c3d9a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Explore the beautiful coastline and ancient ruins of Southern India.",
      price: 950,
      status: "Published",
      category: "Domestic",
    },
    {
      title: "Rajasthan Royals",
      destination: "Jaipur, Udaipur, Jaisalmer",
      imageUrl: "https://images.unsplash.com/photo-1524293581614-6004823a0e25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Experience the royal heritage and vibrant culture of Rajasthan.",
      price: 1100,
      status: "Draft",
      category: "Domestic",
    },
    {
      title: "European Dreams",
      destination: "Paris, Rome, Barcelona",
      imageUrl: "https://images.unsplash.com/photo-1509281373046-04b69e433d13?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Discover the iconic landmarks and rich history of Europe.",
      price: 2500,
      status: "Published",
      category: "International",
    },
  ];

  const insertTrip = await db.prepare('INSERT OR IGNORE INTO trips (id, title, destination, imageUrl, description, price, status, category) VALUES (?, ?, ?, ?, ?, ?, ?, ?)');

  for (const trip of trips) {
    await insertTrip.run(null, trip.title, trip.destination, trip.imageUrl, trip.description, trip.price, trip.status, trip.category);
  }

  await insertTrip.finalize();

  console.log('Sample trip data inserted.');

  await db.close();
  console.log('Database connection closed.');
}

createTripsTable().catch((err) => {
  console.error('❌ Error creating trips table:', err);
  process.exit(1);
});
