import React from "react";
import "../Header.css";
import { BsSearch } from "react-icons/bs";
import Avatar from "@mui/material/Avatar";
import { useDataLayerValue } from "../DataLayer";
import { Link } from "react-router-dom";
import { useState } from "react";
import SearchMain from "../Search/SearchMain"

function MyHeader({ spotify }) {
  const [{ user }, dispatch] = useDataLayerValue();

  console.log("user", user);

  // const [searchText, setSearchText] = useState("");

  // const handleChange = (e) => {
  //   setSearchText(e.target.value);
  // };

  return (
    <div className="header">
      <div className="header__left">
        <BsSearch />
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
          // onChange={handleChange}
        />
        {/* <SearchMain word={searchText} /> */}
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
