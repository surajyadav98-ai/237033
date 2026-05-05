function getPriority(type) {
  if (type === "Placement") return 3;
  if (type === "Result") return 2;
  if (type === "Event") return 1;
  return 0;
}

let notifications = [
  { type: "Placement", message: "AMD hiring", timestamp: "2026-04-22 17:49:42" },
  { type: "Placement", message: "CSX hiring", timestamp: "2026-04-22 17:51:18" },
  { type: "Result", message: "mid-sem", timestamp: "2026-04-22 17:51:30" },
  { type: "Event", message: "farewell", timestamp: "2026-04-22 17:51:06" },
  { type: "Result", message: "project-review", timestamp: "2026-04-22 17:50:42" }
];

// sorting
notifications.sort((a, b) => {
  const p1 = getPriority(a.type);
  const p2 = getPriority(b.type);

  if (p1 !== p2) return p2 - p1;

  return new Date(b.timestamp) - new Date(a.timestamp);
});

// top 10
const top10 = notifications.slice(0, 10);

console.log("\n🔥 Top Notifications:\n");

top10.forEach((n, i) => {
  console.log(`${i + 1}. ${n.type} - ${n.message}`);
});