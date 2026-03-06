// Import required libraries
const axios = require("axios");
const cheerio = require("cheerio");
const Event = require("../models/Event");

/*
  Function: scrapeEvents()

  This function scrapes events from a public website
  and saves them into MongoDB database.
*/

async function scrapeEvents() {

  try {

    const url = "https://example.com/events";

    // Fetch HTML from website
    const response = await axios.get(url);

    const html = response.data;

    // Load HTML using cheerio
    const $ = cheerio.load(html);

    // Loop through event cards
    $(".event-card").each(async (index, element) => {

      const title = $(element).find(".title").text();
      const date = $(element).find(".date").text();
      const venue = $(element).find(".venue").text();

      // Create new event object
      const event = new Event({
        title: title,
        date: date,
        venue: venue,
        city: "Sydney",
        lastScraped: new Date()
      });

      // Save event in database
      await event.save();

    });

    console.log("Event scraping completed");

  } catch (error) {

    console.log("Scraping error:", error);

  }

}

module.exports = scrapeEvents;
