import React, { useEffect, useState } from "react";
import axios from "axios";
import EventCard from "../components/EventCard";

/*
  Home page shows list of events
*/

function Home() {

  const [events, setEvents] = useState([]);

  // Fetch events from backend
  useEffect(() => {

    axios.get("http://localhost:5000/api/events")
      .then(response => {

        setEvents(response.data);

      })
      .catch(error => {

        console.log("Error fetching events:", error);

      });

  }, []);

  return (

    <div>

      <h1>Sydney Events</h1>

      {events.map(event => (
        <EventCard
          key={event._id}
          event={event}
        />
      ))}

    </div>

  );

}

export default Home;
