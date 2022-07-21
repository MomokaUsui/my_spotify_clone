import React, { useEffect } from "react";
import "../MySidebar.css";
import SidebarOption from "../Components/SidebarOption";
import { AiFillHome } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { BiLibrary } from "react-icons/bi";
import { getTokenFromResponse } from "../spotify";
import { useDataLayerValue } from "../DataLayer";
import { Link } from "react-router-dom";

function MySidebar() {
  return (
    <div>
      <div className="sidebar">
        <img
          className="sidebar__logo"
          src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
          alt=""
        />
        <Link to="/">
          <SidebarOption Icon={AiFillHome} title="Home" />
        </Link>
        <Link to="/Search">
          <SidebarOption Icon={BsSearch} title="Search" />
        </Link>

        <br />

        <strong className="sidebar__title">PLAYLISTS</strong>
        <hr />
      </div>
    </div>
  );
}

export default MySidebar;
