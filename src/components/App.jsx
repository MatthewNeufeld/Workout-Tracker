import React, { useState } from "react";
import Header from "./Header";
import Session from "./Session";
import CreateArea from "./CreateArea";
import CurrentDate from "./CurrentDate";

function App() {
  //initially sessions is an empty array
  const [sessions, setSessions] = useState([]);
  function addSession(newSession) {
    setSessions((prevSessions) => {
      //when sessions are added, return all previous sessions + the new one
      return [...prevSessions, newSession];
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addSession} />
      {/* iterate through sessionItems */}
      {sessions.map((sessionItem, index) => {
        return (
          <Session
            key={index}
            id={index}
            date={CurrentDate.value}
            content={sessionItem.content}
          />
        );
      })}
    </div>
  );
}

export default App;
