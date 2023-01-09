import React from "react";
import CurrentDate from "./CurrentDate";

//create a session with the current date and user inputted content
function Session(props) {
  return (
    <div className="session">
      <h1>{CurrentDate.value}</h1>
      <p>{props.content}</p>
    </div>
  );
}

export default Session;
