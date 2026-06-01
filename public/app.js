let PROFILES = [];
let MONTHLY = [];
let DETAILS = [];
let sortKey = "sr";
let sortDir = 1;
let detailIdx = 0;

const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

// ---------- Tab navigation ----------
$$(".tab").forEach((t) =>
  t.addEventListener("click", () => {
    $$(".tab").forEach((x) => x.classList.remove("active"));
    t.classList.add("active");
    const v = t.dataset.view;
    $("#view-profiles").classList.toggle("hidden", v !== "profiles");
    $("#view-monthly").classList.toggle("hidden", v !== "monthly");
    $("#view-details").classList.toggle("hidden", v !== "details");
  })
);

// ---------- Load ----------
// Reads static JSON files (deployable anywhere). If those are missing
// (dev mode), falls back to the live /api endpoints from the Node server.
async function loadOne(staticPath, apiPath) {
  const opts = { cache: "no-store" };
  try {
    const r = await fetch(staticPath, opts);
    if (r.ok) return r.json();
  } catch {}
  return fetch(apiPath, opts).then((r) => r.json());
}
async function load() {
  [PROFILES, MONTHLY, DETAILS] = await Promise.all([
    loadOne("profiles.json", "/api/profiles"),
    loadOne("monthly.json", "/api/monthly"),
    loadOne("details.json", "/api/details"),
  ]);
  initFilters();
  renderProfiles();
  initMonthly();
  initDetails();
}

// ---------- Profiles: filters ----------
function uniq(key) {
  return [...new Set(PROFILES.map((p) => p[key]))].sort();
}
function initFilters() {
  fill("#f-niche", uniq("nicheRelevance"));
  fill("#f-geo", uniq("geographicFocus"));
  fill("#f-quality", uniq("linkQuality"));
  fill("#f-anchor", uniq("anchorType"));
}
function fill(sel, values) {
  const el = $(sel);
  values.forEach((v) => {
    const o = document.createElement("option");
    o.value = v;
    o.textContent = v;
    el.appendChild(o);
  });
}

function getFiltered() {
  const q = $("#search").value.toLowerCase().trim();
  const fn = $("#f-niche").value;
  const fg = $("#f-geo").value;
  const fq = $("#f-quality").value;
  const fa = $("#f-anchor").value;
  let rows = PROFILES.filter((p) => {
    if (q && !p.website.toLowerCase().includes(q)) return false;
    if (fn && p.nicheRelevance !== fn) return false;
    if (fg && p.geographicFocus !== fg) return false;
    if (fq && p.linkQuality !== fq) return false;
    if (fa && p.anchorType !== fa) return false;
    return true;
  });
  rows.sort((a, b) => {
    let x = a[sortKey], y = b[sortKey];
    if (typeof x === "number") return (x - y) * sortDir;
    return String(x).localeCompare(String(y)) * sortDir;
  });
  return rows;
}

function renderProfiles() {
  const rows = getFiltered();
  const tb = $("#profiles-table tbody");
  tb.innerHTML = rows
    .map(
      (p) => `<tr>
        <td>${p.sr}</td>
        <td><a href="https://${p.website}" target="_blank" rel="noopener" style="color:var(--accent);text-decoration:none">${p.website}</a></td>
        <td><span class="metric ${p.domainRating >= 55 ? "good" : "mid"}">${p.domainRating}</span></td>
        <td><span class="metric ${p.domainAuthority >= 30 ? "good" : "mid"}">${p.domainAuthority}</span></td>
        <td><span class="badge ${p.nicheRelevance.toLowerCase()}">${p.nicheRelevance}</span></td>
        <td>${p.geographicFocus}</td>
        <td>${p.trafficEstimate}</td>
        <td>${p.spamScore}</td>
        <td><span class="badge ${p.linkQuality.toLowerCase()}">${p.linkQuality}</span></td>
        <td>${p.anchorType}</td>
      </tr>`
    )
    .join("");
  $("#row-count").textContent = `${rows.length} of ${PROFILES.length} sites shown`;
  renderStats(rows);
}

function renderStats(rows) {
  const n = rows.length || 1;
  const avg = (k) => Math.round(rows.reduce((s, p) => s + p[k], 0) / n);
  const prem = rows.filter((p) => p.linkQuality === "Premium").length;
  const high = rows.filter((p) => p.nicheRelevance === "High").length;
  $("#profile-stats").innerHTML = `
    <div class="card"><div class="val blue">${rows.length}</div><div class="lbl">Filtered sites</div></div>
    <div class="card"><div class="val">${avg("domainRating")}</div><div class="lbl">Avg DR</div></div>
    <div class="card"><div class="val">${avg("domainAuthority")}</div><div class="lbl">Avg DA</div></div>
    <div class="card"><div class="val green">${prem}</div><div class="lbl">Premium quality</div></div>
    <div class="card"><div class="val green">${high}</div><div class="lbl">High niche</div></div>`;
}

// Column sorting
$$("#profiles-table th").forEach((th) =>
  th.addEventListener("click", () => {
    const k = th.dataset.key;
    if (sortKey === k) sortDir *= -1;
    else { sortKey = k; sortDir = 1; }
    $$("#profiles-table th").forEach((x) => x.classList.remove("sorted-asc", "sorted-desc"));
    th.classList.add(sortDir === 1 ? "sorted-asc" : "sorted-desc");
    renderProfiles();
  })
);

["search", "f-niche", "f-geo", "f-quality", "f-anchor"].forEach((id) =>
  $("#" + id).addEventListener("input", renderProfiles)
);
$("#reset").addEventListener("click", () => {
  ["search", "f-niche", "f-geo", "f-quality", "f-anchor"].forEach((id) => ($("#" + id).value = ""));
  renderProfiles();
});

$("#export").addEventListener("click", () => {
  const rows = getFiltered();
  const head = ["#", "Website", "DR", "DA", "Niche", "Region", "Traffic/month", "Spam", "Quality", "Anchor"];
  const lines = [head.join(",")].concat(
    rows.map((p) =>
      [p.sr, p.website, p.domainRating, p.domainAuthority, p.nicheRelevance, p.geographicFocus, `"${p.trafficEstimate}"`, p.spamScore, p.linkQuality, p.anchorType].join(",")
    )
  );
  const blob = new Blob(["﻿" + lines.join("\n")], { type: "text/csv;charset=utf-8;" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "backlink-profiles.csv";
  a.click();
});

// ---------- Reusable month toggle ----------
function buildToggle(wrapSel, items, onSelect, activeIndex) {
  const wrap = $(wrapSel);
  wrap.innerHTML = items
    .map((label, i) => `<button class="seg" data-i="${i}">${label}</button>`)
    .join("");
  const segs = wrap.querySelectorAll(".seg");
  segs.forEach((b) =>
    b.addEventListener("click", () => {
      segs.forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
      onSelect(Number(b.dataset.i));
    })
  );
  if (segs[activeIndex]) segs[activeIndex].classList.add("active");
}

// ---------- Monthly reports ----------
function statusClass(s) {
  const t = s.toLowerCase();
  if (t.includes("alert")) return "alert";
  if (t.includes("warn") || t.includes("early") || t.includes("launch") || t.includes("recovery") || t.includes("paused")) return "warn";
  if (t.includes("inactive")) return "off";
  return "ok";
}

function initMonthly() {
  const last = MONTHLY.length - 1;
  buildToggle("#m-toggle", MONTHLY.map((m) => m.month), renderMonthly, last);
  renderMonthly(last);
}

function renderMonthly(idx) {
  const m = MONTHLY[idx];
  $("#monthly-content").innerHTML = `
    <div class="month-block">
      <div class="month-head">
        <h2>${m.month}</h2>
        <span class="phase">${m.phase}</span>
      </div>
      <div class="table-wrap">
        <table>
          <thead><tr>
            <th>Domain</th><th>Backlinks</th><th>Ref. Domains</th><th>DA</th>
            <th>Follow %</th><th>Spam</th><th>Status</th><th>vs. Previous</th>
          </tr></thead>
          <tbody>
            ${m.domains
              .map(
                (d) => `<tr>
                <td><strong>${d.domain}</strong></td>
                <td>${d.backlinks}</td><td>${d.refDomains}</td><td>${d.da}</td>
                <td>${d.follow}</td><td>${d.spam}</td>
                <td><span class="status ${statusClass(d.status)}">${d.status}</span></td>
                <td style="color:var(--muted)">${d.vsPrevious}</td>
              </tr>`
              )
              .join("")}
          </tbody>
        </table>
      </div>
      <div class="sec-title">Summary</div>
      <div class="summary">${m.summary}</div>
      <div class="sec-title">Recommendations</div>
      <ul class="recos">${m.recommendations.map((r) => `<li>${r}</li>`).join("")}</ul>
    </div>`;
}

// ---------- Link details ----------
function initDetails() {
  if (!DETAILS.length) {
    $("#details-empty").classList.remove("hidden");
    $("#details-table").parentElement.classList.add("hidden");
    return;
  }
  detailIdx = 0;
  buildToggle(
    "#d-toggle",
    DETAILS.map((d) => d.month),
    (i) => {
      detailIdx = i;
      refreshTargetFilter();
      renderDetails();
    },
    0
  );
  ["d-search", "d-target"].forEach((id) =>
    $("#" + id).addEventListener("input", renderDetails)
  );
  refreshTargetFilter();
  renderDetails();
}

function refreshTargetFilter() {
  const m = DETAILS[detailIdx];
  const targets = [...new Set(m.links.map((l) => l.target))].sort();
  $("#d-search").value = "";
  $("#d-target").innerHTML =
    '<option value="">Target: all</option>' +
    targets.map((t) => `<option value="${t}">${t}</option>`).join("");
}

function getDetailRows() {
  const m = DETAILS[detailIdx];
  const q = $("#d-search").value.toLowerCase().trim();
  const ft = $("#d-target").value;
  return {
    month: m,
    rows: m.links.filter((l) => {
      if (ft && l.target !== ft) return false;
      if (q) {
        const hay = `${l.postUrl} ${l.anchor} ${l.target}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    }),
  };
}

function renderDetails() {
  const { month, rows } = getDetailRows();
  $("#details-label").innerHTML = `<strong>${month.month}</strong> (${month.label})`;
  $("#details-table tbody").innerHTML = rows
    .map(
      (l) => `<tr>
        <td>${l.sr}</td>
        <td><a href="${l.postUrl}" target="_blank" rel="noopener" style="color:var(--accent);text-decoration:none">${shortUrl(l.postUrl)}</a></td>
        <td>${l.anchor}</td>
        <td><strong>${l.target}</strong></td>
        <td><span class="status ${l.status.toLowerCase() === "live" ? "ok" : "warn"}">${l.status}</span></td>
      </tr>`
    )
    .join("");
  $("#details-count").textContent = `${rows.length} of ${month.links.length} links shown`;
}

function shortUrl(u) {
  try {
    const url = new URL(u);
    let p = decodeURIComponent(url.pathname).replace(/\/$/, "");
    if (p.length > 60) p = p.slice(0, 60) + "…";
    return url.hostname + p;
  } catch {
    return u;
  }
}

$("#d-export").addEventListener("click", () => {
  const { month, rows } = getDetailRows();
  const head = ["#", "Post URL", "Anchor", "Target", "Status"];
  const lines = [head.join(",")].concat(
    rows.map((l) =>
      [l.sr, `"${l.postUrl}"`, `"${l.anchor}"`, l.target, l.status].join(",")
    )
  );
  const blob = new Blob(["﻿" + lines.join("\n")], { type: "text/csv;charset=utf-8;" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `backlinks-${month.month.replace(/\s+/g, "-").toLowerCase()}.csv`;
  a.click();
});

load();
