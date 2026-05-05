const express = require("express");
const app = express();
const PORT = 3000;

function getPriority(type) {
  if (type === "Placement") return 3;
  if (type === "Result") return 2;
  if (type === "Event") return 1;
  return 0;
}

app.get("/notifications", (req, res) => {
  let notifications = [
    { type: "Placement", message: "AMD hiring", timestamp: "2026-04-22" },
    { type: "Result", message: "mid sem", timestamp: "2026-04-21" },
    { type: "Event", message: "farewell", timestamp: "2026-04-20" }
  ];

  notifications.sort((a, b) => {
    const p1 = getPriority(a.type);
    const p2 = getPriority(b.type);

    if (p1 !== p2) return p2 - p1;

    return new Date(b.timestamp) - new Date(a.timestamp);
  });

  res.json(notifications.slice(0, 10));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});