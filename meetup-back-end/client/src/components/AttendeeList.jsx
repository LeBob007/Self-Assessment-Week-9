import React from "react";
import AttendeeSkillList from "./AttendeeSkillList.jsx";

const groupBy = (list, property) => {
  const groups = {};
  list.forEach((element) => {
    let group = element[property];
    if (!(group in groups)) {
      groups[group] = [];
    }
    groups[group].push(element);
  });
  return groups;
};

const AttendeeList = ({ attendees, getAttendees }) => {
  const groups = groupBy(attendees, "skillLevel");
  return (
    <div className="attendees">
      <h2>Attendees</h2>
      <AttendeeSkillList title="Expert" attendees={groups.expert} getAttendees={getAttendees} />
      <AttendeeSkillList title="Intermediate" attendees={groups.intermediate} getAttendees={getAttendees} />
      <AttendeeSkillList title="Beginner" attendees={groups.beginner} getAttendees={getAttendees} />
    </div>
  );
};

export default AttendeeList;
