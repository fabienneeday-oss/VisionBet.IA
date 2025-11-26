module.exports = {
  port: process.env.PORT || 3000,
  db_url: process.env.DB_URL || "mongodb://localhost:27017/visionbet_db",
  jwtSecret: process.env.JWT_SECRET || "visionbet-secret-key",
  clientURL: process.env.CLIENT_URL || "http://localhost:3000"
};
