import SpeedIcon from "@material-ui/icons/Speed";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import FaceIcon from "@material-ui/icons/Face";
import { Avatar } from "@material-ui/core";
import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HomeIcon from "@material-ui/icons/Home";
import "./CssOfComponents/Sidebar.css";
import teacher from "../img/png/class.png";
import student from "../img/png/student.png";
import { Link, NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <Avatar
          className="sidebar__top_avatar"
          src="https://assets.vogue.in/photos/5fbe4ed51872f794424abe48/16:9/w_1280,c_limit/Shraddha%2520Kapoor.jpg"
        />
        <h2>Shraddha Kapoor</h2>
        <p>Administrator</p>
        <div className="sidebar__top__icons">
          <div className="person">
            <NavLink className="navlink__icons" to="">
              <PersonIcon />
            </NavLink>
          </div>
          <div className="home">
            <NavLink className="navlink__icons" exact to="/lavda">
              <HomeIcon></HomeIcon>
            </NavLink>
          </div>
          <div className="exit">
            <NavLink className="navlink__icons" to="/lassan">
              <ExitToAppIcon />
            </NavLink>
          </div>
        </div>
      </div>
      <div className="sidebar__bottom">
        <div className="sidebar__bottom__title">
          <h3>Navigation</h3>
        </div>
        <div className="sidebar__bottom__list">
          <ul>
            <li>
              <NavLink className="navlink__option" activeClassName="navlink__option__active" exact to="/ComponentInsideCom/Dashbord">
                {" "}
                <SpeedIcon /> &nbsp;<p>Dashboard</p>
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink__option" activeClassName="navlink__option__active" exact to="/ComponentInsideCom/Calender">
                <CalendarTodayIcon />
                &nbsp;<p> Calander</p>
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink__option" activeClassName="navlink__option__active" exact to="/ComponentInsideCom/Student">
                <FaceIcon />
                &nbsp;<p>Students </p>
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink__option" activeClassName="navlink__option__active" exact to="/ComponentInsideCom/Teachers">
                <img src={teacher} id="LOL" />
                &nbsp;<p>Teachers</p>
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink__option" activeClassName="navlink__option__active" exact to="/ComponentInsideCom/Branches">
                <img src={student} />
                &nbsp;<p>Branches </p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
