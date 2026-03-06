import React from "react";

/*
  Component used to display a single event
*/

function EventCard({ event }) {

  return (

    <div style={{
      border: "1px solid #ccc",
      padding: "20px",
      margin: "10px",
      borderRadius: "8px"
    }}>

      <h2>{event.title}</h2>

      <p>Date: {event.date}</p>

      <p>Venue: {event.venue}</p>

      <button>

        GET TICKETS

      </button>

    </div>

  );

}

export default EventCard;
