import React, { useState, useEffect } from "react";

import axios from "axios";

import AttendeeForm from "./AttendeeForm.jsx";
import AttendeeList from "./AttendeeList.jsx";

const App = () => {
  const [attendees, setAttendees] = useState([]);

  const getAttendees = () => {
    axios
      .get("/attendees")
      .then((res) => {
        setAttendees(res.data);
      })
      .catch((error) => {
        console.error(`Error in retrieving attendees: ${error}`);
      });
  };

  const addAttendee = (attendee) => {
    axios
      .post("/attendees", attendee)
      .then(() => {
        getAttendees();
      })
      .catch((error) => {
        console.error(`Error in adding attendees: ${error}`);
      });
  };

  useEffect(() => {
    getAttendees();
  }, []);

  return (
    <div className="main">
      <AttendeeForm addAttendee={addAttendee} />
      <AttendeeList attendees={attendees} />
    </div>
  );
};

export default App;
