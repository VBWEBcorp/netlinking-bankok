import { MongoClient } from "mongodb";
import "dotenv/config";

const uri = process.env.MONGODB_URI;
let client;
let db = null;

// Connexion paresseuse + tolérante : si Atlas est injoignable (IP non autorisée,
// hors-ligne...), l'app continue de fonctionner sur les données locales.
export async function getDb() {
  if (db) return db;
  if (!uri) return null;
  try {
    client = new MongoClient(uri, { serverSelectionTimeoutMS: 6000 });
    await client.connect();
    db = client.db(); // base "netlinking" (définie dans l'URI)
    console.log("✓ MongoDB connecté (base netlinking)");
    return db;
  } catch (err) {
    console.warn("⚠ MongoDB injoignable, fallback données locales :", err.message);
    db = null;
    return null;
  }
}

export async function closeDb() {
  if (client) await client.close();
}
