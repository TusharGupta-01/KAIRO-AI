const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const connectDB = require("./config/db");

const authRoutes = require("./modules/auth/auth.routes");
const mentorRoutes = require("./modules/mentor/routes/mentor.routes");
const knowledgeVaultRoutes = require("./modules/knowledgeVault/routes/knowledgeVault.routes");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

// Serve uploaded files
app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"))
);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/mentor", mentorRoutes);
app.use("/api/knowledge-vault", knowledgeVaultRoutes);

app.get("/", (req, res) => {
  res.send("KAIRO AI Backend Running 🚀");
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
};

startServer();