import React from "react";
import { useNavigate } from "react-router-dom";

const Navigationbar = () => {
  const navigate = useNavigate();

  const Home = () => {
    navigate("/");
  };
  return (
    <div>
      <nav>
        <section className="nav">
          <div className="logo">
            <span onClick={Home}>DSCT</span>
          </div>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Month</a>
            </li>
          </ul>
        </section>
      </nav>
    </div>
  );
};

export default Navigationbar;
