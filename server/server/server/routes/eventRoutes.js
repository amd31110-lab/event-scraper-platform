const express = require("express");
const router = express.Router();
const Event = require("../models/Event");

/*
  GET /api/events
  Fetch all events from database
*/
router.get("/", async (req, res) => {

  try {

    const events = await Event.find();

    res.json(events);

  } catch (error) {

    res.status(500).json({
      message: "Error fetching events"
    });

  }

});

/*
  POST /api/events
  Add new event to database
*/
router.post("/", async (req, res) => {

  try {

    const newEvent = new Event(req.body);

    await newEvent.save();

    res.json(newEvent);

  } catch (error) {

    res.status(500).json({
      message: "Error creating event"
    });

  }

});

module.exports = router;
