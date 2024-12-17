const mongoose = require("mongoose");
require("dotenv").config();

async function dbConnnection() {
  isConnected = false;
  if (isConnected) {
    console.log("database is already connected");
    return mongoose.connection;
  }
  try {
    const dburi = process.env.DATABASE_URI;
    const db = await mongoose.connect(dburi, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = db.connections[0].readyState === 1;
    console.log("database connection successful");
  } catch (error) {
    console.log("db connection fail", error);
  }
}

module.exports = dbConnnection;
