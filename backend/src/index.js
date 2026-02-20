import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import { app, server } from "./lib/socket.js";

dotenv.config();

/* ================= BASIC SETUP ================= */
const PORT = process.env.PORT || 5001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* ================= MIDDLEWARE ================= */
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? true
        : "http://localhost:5173",
    credentials: true,
  })
);

/* ================= API ROUTES ================= */
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

/* ================= FRONTEND SERVE (PRODUCTION) ================= */
if (process.env.NODE_ENV === "production") {
  const frontendPath = path.join(__dirname, "../../frontend/dist");

  // Serve static assets
  app.use(express.static(frontendPath));

  // SPA fallback (NO wildcard → Node 22 SAFE)
  app.use((req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
  });
}

/* ================= START SERVER ================= */
server.listen(PORT, async () => {
  console.log(`🚀 Server running on port ${PORT}`);
 

});
