/** @format */

import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./Components/Homepage";
import { BrowserRouter, Routes, Route, json } from "react-router-dom";
import Tasks from "./Components/Tasks";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import CreateTask from "./Components/CreateTask";
import EditTask from "./Components/EditTask";
import Navbarr from "./Components/Navbarr";

function App() {
  const [data, setData] = useState({ tasks: [] });
  useEffect(() => {
    const getData = async (url) => {
      let res = await fetch(url);
      let jsonData = await res.json();
      console.log(jsonData);
      setData({ ...data, tasks: jsonData });
    };

    getData("http://127.0.0.1:8000/api/");
  }, []);

  const deleteData = (id) => {
    fetch(`http://127.0.0.1:8000/api/delete/${id}`, {
      method: "DELETE",
    });
  };
  const refreshPage = () => {
    window.location.reload(false);
  };

  const editTask = (e, updatedTask, id) => {
    e.preventDefault();
    fetch(`http://127.0.0.1:8000/api/update/${id}/`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });
  };
  const createTask = (e, newTask) => {
    e.preventDefault();

    fetch(`http://127.0.0.1:8000/api/create/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newTask),
    });
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbarr />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/tasks"
            element={
              <Tasks
                tasks={data.tasks}
                deleteData={deleteData}
                refreshPage={refreshPage}
              />
            }
          />
          <Route
            path="/create"
            element={<CreateTask createTask={createTask} />}
          />
          <Route path="/edit/:id" element={<EditTask editTask={editTask} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
