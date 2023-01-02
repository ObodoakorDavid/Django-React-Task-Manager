/** @format */

import React from "react";
import "../Styles/CreateTask.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const CreateTask = ({ createTask }) => {
  const navigate = useNavigate();
  const [newTask, setNewTask] = useState({
    task: "",
    description: "",
    tags: 1,
  });

  const options = ["urgent", "important"];

  return (
    <div className="create-task">
      <h2>New Task</h2>
      <form
        onSubmit={(e) => {
          createTask(e, newTask);
          console.log(newTask);
          navigate("/tasks");
        }}
        action=""
      >
        <div>
          <p>Task Title</p>
          <input
            onChange={(e) => {
              setNewTask({ ...newTask, task: e.target.value });
            }}
            type="text"
          />
        </div>
        <div>
          <p>Description</p>
          <textarea
            onChange={(e) => {
              setNewTask({ ...newTask, description: e.target.value });
            }}
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div>
          <p>Tags</p>
          <select
            onChange={(e) => {
              if (e.target.value == "urgent") {
                setNewTask({ ...newTask, tags: 1 });
              } else {
                setNewTask({ ...newTask, tags: 2 });
              }
            }}
          >
            {options.map((each) => {
              return (
                <option key={each} value={each}>
                  {each}
                </option>
              );
            })}
          </select>
        </div>
        <button>Done</button>
        <Link>Back To Top</Link>
      </form>
    </div>
  );
};

export default CreateTask;
