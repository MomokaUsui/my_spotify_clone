import React, { useEffect } from "react";
import "../Sidebar.css";
import SidebarOption from "../Components/SidebarOption";
import { AiFillHome } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { BiLibrary } from "react-icons/bi";
import { getTokenFromResponse } from "../spotify";
import { useDataLayerValue } from "../DataLayer";
import { Link } from "react-router-dom";

function SearchSidebar() {
  
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <Link to="/" style={{ textDecoration: 'none' }}>
      <SidebarOption Icon={AiFillHome} title="Home" />
      </Link>
      <Link to="/MyTrack" style={{ textDecoration: 'none' }}>
        <SidebarOption Icon={BiLibrary} title="MyTrack" />
      </Link>
      <br />

      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />

    </div>
  );
}

export default SearchSidebar;
