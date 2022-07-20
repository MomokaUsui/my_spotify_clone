import React from "react";
import "./Header.css";
import { BsSearch } from "react-icons/bs";
import Avatar from "@mui/material/Avatar";
import { useDataLayerValue } from "./DataLayer";
import { Link } from "react-router-dom";

function MyHeader({ spotify }) {
  const [{ user }, dispatch] = useDataLayerValue();
  // const [{ top_tracks }, dispatch2] = useDataLayerValue();
  // console.log("tracks",top_tracks)
  //ここでは取ってこれているのに、なぜか、returnではできない。
  console.log("user", user);

  return (
    <div className="header">
      <div className="header__left">
        <BsSearch />
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
      </div>
      <div className="header__center"></div>
      <div className="header__right">
        <Avatar alt={user?.display_name} src={user?.images[0].url} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default MyHeader;
