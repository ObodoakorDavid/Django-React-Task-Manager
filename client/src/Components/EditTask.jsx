/** @format */

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const EditTask = ({ editTask }) => {
  const { id } = useParams();
  const [data, setData] = useState({
    task: {},
    updatedTask: {},
    choosenOption: {},
    options: ["urgent", "important"],
  });
  useEffect(() => {
    const getData = async (url) => {
      let res = await fetch(url);
      let jsonData = await res.json();
      console.log(jsonData);
      setData({ ...data, task: jsonData, updatedTask: jsonData });
    };
    getData(`http://127.0.0.1:8000/api/update/${id}`);
  }, []);
  return (
    <div className="create-task">
      <h2>Edit Task</h2>
      <form
        onSubmit={(e) => {
          editTask(e, data.updatedTask, data.updatedTask.id);
          console.log(data);
        }}
        action=""
      >
        <div>
          <p>Task Title</p>
          <input
            onChange={(e) => {
              setData({
                ...data,
                updatedTask: { ...data.updatedTask, task: e.target.value },
                task: { ...data.task, task: e.target.value },
              });
            }}
            type="text"
            value={data.task.task || ""}
          />
        </div>
        <div>
          <p>Description</p>
          <textarea
            onChange={(e) => {
              setData({
                ...data,
                updatedTask: {
                  ...data.updatedTask,
                  description: e.target.value,
                },
                task: { ...data.task, description: e.target.value },
              });

              console.log(data);
            }}
            name=""
            id=""
            cols="30"
            rows="10"
            value={data.task.description}
          >
            {data.task.description}
          </textarea>
        </div>
        <div>
          <p>Tags</p>
          <select
            onChange={(e) => {
              console.log(e);
              console.log(e.target.value);
              if (e.target.value == "urgent") {
                setData({
                  ...data,
                  updatedTask: { ...data.updatedTask, tags: 1 },
                });
              } else {
                setData({
                  ...data,
                  updatedTask: { ...data.updatedTask, tags: 2 },
                });
              }

              console.log(data);
            }}
          >
            {data.options.map((each) => {
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

export default EditTask;
