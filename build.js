// Generate static JSON files in /public so the site can be deployed
// anywhere as a static site (no server needed).
import { writeFileSync } from "fs";
import { profiles } from "./data/profiles.js";
import { monthly } from "./data/monthly.js";
import { details } from "./data/details.js";

writeFileSync("public/profiles.json", JSON.stringify(profiles));
writeFileSync("public/monthly.json", JSON.stringify(monthly));
writeFileSync("public/details.json", JSON.stringify(details));

console.log(`✓ public/profiles.json (${profiles.length} sites)`);
console.log(`✓ public/monthly.json  (${monthly.length} months)`);
console.log(
  `✓ public/details.json  (${details.length} months, ${details.reduce(
    (s, d) => s + d.links.length,
    0
  )} links)`
);
