import React, { useEffect } from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import { AiFillHome } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { BiLibrary } from "react-icons/bi";
import { getTokenFromResponse } from "./spotify";
import { useDataLayerValue } from "./DataLayer";
import { Link } from "react-router-dom";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
  console.log("Playlist", playlists);
  let p = {
    items: [1, 2, 3],
  };
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />

      <SidebarOption Icon={AiFillHome} title="Home" />
      <SidebarOption Icon={BsSearch} title="Search" />
      <Link to="MyTrack">
        <SidebarOption Icon={BiLibrary} title="MyTrack" />
      </Link>
      <br />

      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />

      {playlists?.items?.map((playlist, key) => (
        <SidebarOption title={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
