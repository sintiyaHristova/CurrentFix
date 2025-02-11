import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config(); // Зарежда променливите от .env файла

const app = express();

// Разрешаваме заявки от фронтенда (http://localhost:3000)
app.use(cors({ origin: "http://localhost:3000" }));

// Серверираме статични файлове от директорията "public"
app.use(express.static("public"));

// Обработваме кореновия път
app.get("/", (req, res) => {
  res.send("Здравей, свят! Сървърът е стартиран.");
});

// API ендпойнт за достъп до accessKey
app.get("/api/getAccessKey", (req, res) => {
  res.json({ accessKey: process.env.ACCESS_KEY });
});

// Стартирай сървъра на порт 5000 (или този от .env)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Сървърът работи на http://localhost:${PORT}`));
