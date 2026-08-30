import { loadEnvFile } from "node:process";
import mongoose from "mongoose";

const SHUTDOWN_TIMEOUT_MS = 10_000;

try {
  loadEnvFile(".env");
} catch (err) {
  // Production environments commonly inject variables without an .env file.
  if (err.code !== "ENOENT") throw err;
}

const databaseTemplate = process.env.DATABASE_URL;
const databasePassword = process.env.DATABASE_PASSWORD;
const port = Number(process.env.PORT ?? 3000);

if (!databaseTemplate) {
  throw new Error("DATABASE_URL is required");
}

if (databaseTemplate.includes("<PASSWORD>") && !databasePassword) {
  throw new Error("DATABASE_PASSWORD is required");
}

if (!Number.isInteger(port) || port < 1 || port > 65_535) {
  throw new Error("PORT must be an integer between 1 and 65535");
}

const databaseUrl = databasePassword
  ? databaseTemplate.replace(
      "<PASSWORD>",
      encodeURIComponent(databasePassword)
    )
  : databaseTemplate;

let server;
let isShuttingDown = false;

async function startServer() {
  // Import after loading .env so app-level configuration sees NODE_ENV.
  const { default: app } = await import("./app.js");

  await mongoose.connect(databaseUrl);
  console.log("Database connection successful");

  server = app.listen(port, () => {
    console.log(`App running on port ${port}`);
  });
}

async function shutdown(reason, exitCode = 0) {
  if (isShuttingDown) return;
  isShuttingDown = true;

  console.log(`${reason}. Shutting down...`);

  const forceExit = setTimeout(() => {
    console.error("Graceful shutdown timed out");
    process.exit(exitCode || 1);
  }, SHUTDOWN_TIMEOUT_MS);
  forceExit.unref();

  try {
    if (server) {
      await new Promise((resolve, reject) => {
        server.close((err) => (err ? reject(err) : resolve()));
      });
    }

    await mongoose.disconnect();
  } catch (err) {
    console.error("Error during graceful shutdown", err);
    exitCode = 1;
  } finally {
    clearTimeout(forceExit);
    process.exit(exitCode);
  }
}

process.on("SIGTERM", () => void shutdown("SIGTERM received"));
process.on("SIGINT", () => void shutdown("SIGINT received"));

process.on("unhandledRejection", (reason) => {
  console.error("Unhandled promise rejection", reason);
  void shutdown("Unhandled promise rejection", 1);
});

startServer().catch((err) => {
  console.error("Application startup failed", err);
  void shutdown("Startup failure", 1);
});
