/** @format */

import React from "react";
import "../Styles/Tasks.css";
import editIcon from "../images/edit-icon.png";
import deleteIcon from "../images/bin-img.png";
import { useNavigate, Link } from "react-router-dom";

const Tasks = ({ tasks, deleteData, refreshPage }) => {
  return (
    <div className="tasks">
      <div className="my-tasks p-3">
        <h1>My Tasks</h1>{" "}
        <Link className="text-decoration-none fw-bold" style={{ color: "#974FD0" }} to="/create">
          + Add New Task
        </Link>
      </div>
      {tasks.map((task) => {
        return (
          <div className="each-task" key={task.id}>
            <div className="first-line p-3 pb-2 d-flex align-items-baseline">
              <div>
                {task.tags == 1 ? (
                  <p style={{ color: "#F38383", margin: "0" }}>Urgent</p>
                ) : (
                  <p style={{ color: "#73C3A6", margin: "0" }}>Important</p>
                )}
              </div>
              <div>
                <Link
                  style={{ backgroundColor: "#974FD0", color: "white" }}
                  className="btn btn-lg-lg d-flex align-items-center gap-2 fw-bold"
                  to={`/edit/${task.id}/`}
                >
                  <img src={editIcon} alt="" />
                  Edit
                </Link>
                <div>
                  <button
                    style={{ border: "2px solid #974FD0", color: '#974FD0' }}
                    className="btn d-flex align-items-center gap-2 fw-bold"
                    onClick={() => {
                      deleteData(task.id);
                      refreshPage();
                    }}
                  >
                    <img src={deleteIcon} alt="" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
            <hr style={{ margin: "8px" }} />
            <p>{task.task}</p>
            <p>{task.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Tasks;
