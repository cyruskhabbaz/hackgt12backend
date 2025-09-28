const express = require("express");
const ical = require("node-ical");
const cors = require("cors");

const expressApp = express();
const port = 3001;

expressApp.use(cors());

expressApp.get("/", (req, res) => {
  res.send("Hello World!");
});

expressApp.get("/ical", (req, res) => {
  let icalUrl = "https://calendar.google.com/calendar/ical/akze.alt%40gmail.com/public/basic.ics";
  ical.async.fromURL(icalUrl).then(value => {
    console.log(value);
    res.json(value);
  });
});

expressApp.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});