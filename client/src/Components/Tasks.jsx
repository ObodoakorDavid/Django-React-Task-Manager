/** @format */

import React from "react";
import "../Styles/Tasks.css";
import { useNavigate, Link } from "react-router-dom";

const Tasks = ({ tasks, deleteData, refreshPage }) => {
  return (
    <div className="tasks">
      <div className="my-tasks">
        <h1>My Tasks</h1> <Link to="/create"> + Add New Task</Link>
      </div>
      {tasks.map((task) => {
        return (
          <div className="each-task" key={task.id}>
            <div className="first-line">
              <div> {task.tags == 1 ? <p>Urgent</p> : <p>Completed</p>}</div>
              <div>
                <Link to={`/edit/${task.id}/`}>Edit</Link>
                <div>
                  <button
                    onClick={() => {
                      deleteData(task.id);
                      refreshPage();
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
            <p>{task.task}</p>
            <p>{task.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Tasks;
