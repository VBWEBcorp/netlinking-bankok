// Pousse les données locales (onglets Excel) dans MongoDB (base "netlinking").
// Usage : npm run seed
import { getDb, closeDb } from "./db.js";
import { profiles } from "./data/profiles.js";
import { monthly } from "./data/monthly.js";
import { details } from "./data/details.js";

async function seed() {
  const db = await getDb();
  if (!db) {
    console.error("✗ Impossible de seed : MongoDB injoignable.");
    process.exit(1);
  }

  await db.collection("backlinks_profiles").deleteMany({});
  await db.collection("backlinks_profiles").insertMany(profiles);
  console.log(`✓ backlinks_profiles : ${profiles.length} documents insérés`);

  await db.collection("monthly_reports").deleteMany({});
  await db.collection("monthly_reports").insertMany(
    monthly.map((m, i) => ({ order: i, ...m }))
  );
  console.log(`✓ monthly_reports : ${monthly.length} documents insérés`);

  await db.collection("backlink_details").deleteMany({});
  if (details.length) {
    await db.collection("backlink_details").insertMany(
      details.map((d, i) => ({ order: i, ...d }))
    );
  }
  const totalLinks = details.reduce((s, d) => s + d.links.length, 0);
  console.log(`✓ backlink_details : ${details.length} mois (${totalLinks} liens)`);

  await closeDb();
  console.log("Terminé.");
  process.exit(0);
}

seed();
