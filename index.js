const express = require("express");
const expressApp = express();
const port = 3001;
const { initializeApp } = require('firebase-admin/app');
const { getDatabase } = require("firebase-admin/database");

require("dotenv").config();

const fbApp = initializeApp(JSON.parse(process.env.FIREBASE_ADMIN_KEY));
const database = getDatabase();

console.log(fbApp);


expressApp.get("/", (req, res) => {
  res.send("Hello World!");
});

expressApp.post("/auth/new-user", (req, res) => {
  const userData = req.body;
  let ref = database.ref(userData.path);
});

expressApp.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});