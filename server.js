import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { getDb } from "./db.js";
import { profiles } from "./data/profiles.js";
import { monthly } from "./data/monthly.js";
import { details } from "./data/details.js";
import "dotenv/config";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3200;

app.use(express.static(join(__dirname, "public")));

// Auto-seed : si Mongo est connecté et la collection vide, on la remplit.
async function ensureSeed(db) {
  if (!db) return;
  try {
    if ((await db.collection("backlinks_profiles").countDocuments()) === 0) {
      await db.collection("backlinks_profiles").insertMany(profiles);
      console.log(`✓ auto-seed backlinks_profiles (${profiles.length})`);
    }
    if ((await db.collection("monthly_reports").countDocuments()) === 0) {
      await db.collection("monthly_reports").insertMany(
        monthly.map((m, i) => ({ order: i, ...m }))
      );
      console.log(`✓ auto-seed monthly_reports (${monthly.length})`);
    }
    if (
      details.length &&
      (await db.collection("backlink_details").countDocuments()) === 0
    ) {
      await db.collection("backlink_details").insertMany(
        details.map((d, i) => ({ order: i, ...d }))
      );
      console.log(`✓ auto-seed backlink_details (${details.length})`);
    }
  } catch (e) {
    console.warn("⚠ auto-seed ignoré :", e.message);
  }
}

app.get("/api/profiles", async (req, res) => {
  const db = await getDb();
  if (db) {
    try {
      const rows = await db
        .collection("backlinks_profiles")
        .find({}, { projection: { _id: 0 } })
        .sort({ sr: 1 })
        .toArray();
      if (rows.length) return res.json(rows);
    } catch (e) {
      /* fallback */
    }
  }
  res.json(profiles);
});

app.get("/api/monthly", async (req, res) => {
  const db = await getDb();
  if (db) {
    try {
      const rows = await db
        .collection("monthly_reports")
        .find({}, { projection: { _id: 0 } })
        .sort({ order: 1 })
        .toArray();
      if (rows.length) return res.json(rows);
    } catch (e) {
      /* fallback */
    }
  }
  res.json(monthly);
});

app.get("/api/details", async (req, res) => {
  const db = await getDb();
  if (db) {
    try {
      const rows = await db
        .collection("backlink_details")
        .find({}, { projection: { _id: 0 } })
        .sort({ order: 1 })
        .toArray();
      if (rows.length) return res.json(rows);
    } catch (e) {
      /* fallback */
    }
  }
  res.json(details);
});

app.listen(PORT, async () => {
  const db = await getDb();
  await ensureSeed(db);
  console.log(`\n➜  Tableur Netlinking : http://localhost:${PORT}\n`);
});
