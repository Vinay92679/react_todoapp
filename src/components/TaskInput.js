import React, { useContext, useState } from "react";
import { TodoContext } from "../Context/TodoProvider";
import "../App.css"

const TaskInput = () => {
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");

  const { dispatch } = useContext(TodoContext);

  const SubmitHandler = () => {
    dispatch({
      type: "ADD",
      payload: {
        title,
        discription,
      },
    });
    setTitle("");
    setDiscription("");
  };

  return (
    <>
      <div className="input_container">
        <div className="app_heading">My Todos</div>
        <div className="input_box">
          <div className="inputss">
            <div>
              <p>Title</p>
              <input
                type="text"
                placeholder="Enter your text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
          </div>
          <div>
          <p>Discription</p>
          <input
            type="text"
            placeholder="Enter your discription"
            value={discription}
            onChange={(event) => setDiscription(event.target.value)}
          />
          </div>
          </div>
          <button onClick={SubmitHandler}>Submit</button>
        </div>
      </div>
    </>
  );
};

export default TaskInput;
