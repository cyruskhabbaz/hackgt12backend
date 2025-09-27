const express = require("express");
const expressApp = express();
const port = 3001;
const { initializeApp } = require('firebase-admin/app');

require("dotenv").config();

const fbApp = initializeApp(JSON.parse(process.env.FIREBASE_ADMIN_KEY));

console.log(fbApp);


expressApp.get("/", (req, res) => {
  res.send("Hello World!");
});

expressApp.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});