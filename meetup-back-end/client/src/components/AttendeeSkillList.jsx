import React from "react";
import Attendee from "./Attendee.jsx";

const AttendeeSkillList = ({ title, attendees, getAttendees }) => (
  <div>
    <h3>{title}</h3>
    {attendees
      ? attendees.map((a) => <Attendee attendee={a} key={a._id} getAttendees={getAttendees}/>)
      : "(none)"}
  </div>
);

export default AttendeeSkillList;
