const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/events");

app.get("/", (req,res)=>{
  res.send("Event scraper API running");
});

app.listen(5000, ()=>{
  console.log("Server running on port 5000");
});
