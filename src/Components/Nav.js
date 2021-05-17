import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutLinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutLinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import React from "react";
import "./CssOfComponents/Nav.css";

function Nav() {
  return (
    <div className="nav">
      <div className="nav__left">
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/66/Truba_Group_of_Institutes_logo.png/220px-Truba_Group_of_Institutes_logo.png" />
        <div className="nav__input">
          <SearchIcon />
          <input type="text" placeholder="Search Here!" />
        </div>
      </div>
      <div className="nav__center">
        <div className="nav__option nav__option__active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="nav__option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="nav__option">
          <SubscriptionsOutLinedIcon fontSize="large" />
        </div>
        <div className="nav__option">
          <StorefrontOutLinedIcon fontSize="large" />
        </div>
        <div className="nav__option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>
      <div className="nav__right"></div>
    </div>
  );
}

export default Nav;
