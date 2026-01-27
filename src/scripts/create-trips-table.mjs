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

  // Clear existing data to avoid duplicates/stale data
  await db.exec("DELETE FROM trips");
  console.log("Cleared existing data from 'trips' table.");

  // Reset ID counter
  await db.exec("DELETE FROM sqlite_sequence WHERE name='trips'");

  // Insert real data from Escapade on Wheels
  const trips = [
    {
      title: "Magical Sikkim",
      destination: "Sikkim, Gangtok, Pelling",
      imageUrl: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=1600&q=80",
      description: "Experience the serene beauty of the Himalayas in Sikkim. Visit ancient monasteries, witness the majestic Kanchenjunga, and explore the vibrant culture of Gangtok.",
      price: 36000,
      status: "Published",
      category: "Domestic",
    },
    {
      title: "The Mystical Land of Ladakh",
      destination: "Leh, Nubra Valley, Pangong Lake",
      imageUrl: "https://images.unsplash.com/photo-1580436541315-ad9a52814d60?auto=format&fit=crop&w=1600&q=80",
      description: "A journey to the roof of the world. Marvel at the stark beauty of the high-altitude desert, ride camels in Nubra, and camp by the changing colors of Pangong Lake.",
      price: 32000,
      status: "Published",
      category: "Domestic",
    },
    {
      title: "Alluring Andamans",
      destination: "Port Blair, Havelock, Neil Island",
      imageUrl: "https://images.unsplash.com/photo-1588612147175-101f3014a0f4?auto=format&fit=crop&w=1600&q=80",
      description: "Sun, sand, and sea. Dive into the crystal clear waters of the Andamans, walk on the white sands of Radhanagar Beach, and witness the history of the Cellular Jail.",
      price: 25000,
      status: "Published",
      category: "Domestic",
    },
    {
      title: "Best Kenya Adventure",
      destination: "Nairobi, Masai Mara, Lake Nakuru",
      imageUrl: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1600&q=80",
      description: "The ultimate African safari experience. Witness the Big Five in their natural habitat, explore the vast savannahs of Masai Mara, and see the flamingoes of Lake Nakuru.",
      price: 141800,
      status: "Published",
      category: "International",
    },
    {
      title: "Epic Thailand Journey",
      destination: "Bangkok, Pattaya, Phuket, Krabi",
      imageUrl: "https://images.unsplash.com/photo-1506665531195-3566d2c76e05?auto=format&fit=crop&w=1600&q=80",
      description: "A perfect blend of city life and island relaxation. Shop in Bangkok, party in Pattaya, and unwind on the pristine beaches of Phuket and Krabi.",
      price: 38800,
      status: "Published",
      category: "International",
    },
    {
      title: "Balkan Treasure Trove",
      destination: "Croatia, Montenegro, Bosnia",
      imageUrl: "https://images.unsplash.com/photo-1515152554746-9d226a350160?auto=format&fit=crop&w=1600&q=80",
      description: "Discover the hidden gems of the Balkans. Wander through the walled city of Dubrovnik, explore the stunning coastlines, and experience the rich history of the region.",
      price: 144700,
      status: "Published",
      category: "International",
    },
  ];

  const insertTrip = await db.prepare('INSERT OR IGNORE INTO trips (id, title, destination, imageUrl, description, price, status, category) VALUES (?, ?, ?, ?, ?, ?, ?, ?)');

  for (const trip of trips) {
    await insertTrip.run(null, trip.title, trip.destination, trip.imageUrl, trip.description, trip.price, trip.status, trip.category);
  }

  await insertTrip.finalize();

  console.log('Real trip data inserted from Escapade on Wheels.');

  await db.close();
  console.log('Database connection closed.');
}

createTripsTable().catch((err) => {
  console.error('❌ Error creating trips table:', err);
  process.exit(1);
});