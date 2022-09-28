import React from "react";
import "../Header.css";
import { BsSearch } from "react-icons/bs";
import Avatar from "@mui/material/Avatar";
import { useDataLayerValue } from "../DataLayer";
import { Link } from "react-router-dom";
import { useState } from "react";
import SearchMain from "../Search/SearchMain";
import { useRecoilState } from "recoil";
import { searchAtom } from "../SearchAtom";

function MyHeader() {
  const [{ user }, dispatch] = useDataLayerValue();

  const [searchText, setSearchText] = useRecoilState(searchAtom);
  console.log("searchText", searchText);

  console.log("user", user);
  const handleChange = (e) => {
    setSearchText(e.target.value);
    console.log("searchText", searchText);
  };

  return (
    <div className="header">
      <div className="header__left">
        <BsSearch />
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
          onChange={handleChange}
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
