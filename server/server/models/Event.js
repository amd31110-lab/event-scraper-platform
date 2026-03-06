const mongoose = require("mongoose");

/*
 Event Schema
 This schema defines how event data will be stored
 inside MongoDB database.
*/

const EventSchema = new mongoose.Schema({

  // Name of the event
  title: String,

  // Date of event
  date: String,

  // Event location
  venue: String,

  // City where event is happening
  city: String,

  // Short description about event
  description: String,

  // Image URL of event
  imageUrl: String,

  // Website from where event was scraped
  source: String,

  // Original event link
  eventUrl: String,

  // Last time scraper updated the event
  lastScraped: Date

});

// Export model
module.exports = mongoose.model("Event", EventSchema);
