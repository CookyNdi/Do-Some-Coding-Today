import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { AiFillTag, AiOutlineCalendar } from "react-icons/ai";

const NaviBar = () => {
  const Navigate = useNavigate();

  const Month = () => {
    Navigate("/month");
  };
  const Home = () => {
    Navigate("/");
  };
  // const Tag = () => {
  //   Navigate("/tag");
  // };
  // const Me = () => {
  //   Navigate("/about-me");
  // };

  return (
    <div>
      <nav>
        <section className="navContainer">
          <div className="navLeft">
            <h1 onClick={Home}>DSCT</h1>
            <div className="navComponent">
              <ul>
                <li title="Month" onClick={Month} style={{ cursor: "pointer" }}>
                  <AiOutlineCalendar className="iconNav" />
                  Month
                </li>
                <li title="Tag Soon" className="disable">
                  <AiFillTag className="iconNav" />
                  Tag
                </li>
                <li title="About Me" className="disable">
                  <FaUserAlt className="iconNav iconNavUser" />
                  About Me
                </li>
              </ul>
            </div>
          </div>
          <div className="navRight">
            <img src="https://img.icons8.com/color/96/000000/indonesia.png" alt="id" />
          </div>
        </section>
      </nav>
    </div>
  );
};

export default NaviBar;
