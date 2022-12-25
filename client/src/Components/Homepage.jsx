/** @format */

import React from "react";
import { Link } from "react-router-dom";
import hero_img from "../images/Hero_img.png";

const Homepage = () => {
  return (
    <div>
      <div>
        <h1>Manage your Tasks on TaskDuty</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus sapiente cupiditate fuga! Perspiciatis natus molestiae
          facere quod harum, ullam ducimus similique libero maxime at
          repudiandae pariatur labore eveniet numquam perferendis!
        </p>
        <Link>Go to My Tasks</Link>
      </div>
      <img src={hero_img} alt="" />
    </div>
  );
};

export default Homepage;
