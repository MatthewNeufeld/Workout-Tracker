import React, { useState } from "react";
import CurrentDate from "./CurrentDate";

function CreateArea(props) {
  const [session, setSession] = useState({
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setSession((prevSession) => {
      return {
        //... to maintain previous sessions
        ...prevSession,
        [name]: value
      };
    });
  }

  function submitSession(event) {
    props.onAdd(session);
    setSession({
      content: ""
    });
    //preventDefault to prevent a refresh each time a session is added
    event.preventDefault();
  }

  //return area for user to input details of their workout session
  return (
    <div>
      <form>
        <h1>{CurrentDate.value}</h1>
        <textarea
          name="content"
          onChange={handleChange}
          value={session.content}
          placeholder="Write details of workout here."
          rows="5"
        />
        <button onClick={submitSession}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
