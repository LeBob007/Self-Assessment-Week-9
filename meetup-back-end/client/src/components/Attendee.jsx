import React, {useState} from "react";
import axios from "axios";

const Attendee = ({ attendee, getAttendees }) => {

  const handleDelete = () => {
    axios.delete("/attendees", { data: { _id: attendee._id } }).then(() => getAttendees()).catch(err => console.erro(`Error in deleting attendees: ${err}`))
  }

  return (
    <div>
      {`${attendee.firstName} ${attendee.lastName}`}
      <button className="attendee-edit">Edit</button>
      <button className="attendee-delete" onClick={handleDelete}>Delete</button>
    </div>
  )
};

export default Attendee;
