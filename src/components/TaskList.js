import React, { useContext } from "react";
import { TodoContext } from "../Context/TodoProvider";
import "../App.css"

const TaskList = () => {
const {state, dispatch} = useContext(TodoContext)

const deleteHandler = (index) => {
   dispatch({
    type: "DELETE",
    payload: {
      index
    }
  })
}

return (
<>
  <div>
    {
     state.todos.map((items, index)=>{
       return (
        <div className="list_container"  key={index}>
        <div className="list_box">
            <div>
              <h1>{items.title}</h1>
              <p>{items.discription}</p>
            </div>
            <div>
              <button onClick={()=>deleteHandler(index)}>Delete</button>
            </div>
        </div>
        </div>
      )
    })
    }
 </div>
</>
)
}

export default TaskList;