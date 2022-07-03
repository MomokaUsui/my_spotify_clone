
import React from 'react'
import "./Header.css"
import { BsSearch } from "react-icons/bs";
import Avatar from '@mui/material/Avatar';
import { useEffect } from "react";
// import { useStateValue } from "./StateProvider";
import { useDataLayerValue } from "./DataLayer"

function Header({ spotify }) {

    const [{ user }, dispatch] = useDataLayerValue();
    return (
        <div className="header">
            <div className="header__left">
                <BsSearch />
                <input
                    placeholder="Search for Artists, Songs, or Podcasts "
                    type="text"
                />
            </div>
            <div className="header__right">
                <Avatar alt={user?.display_name} src={user?.images[0].url} />
                <h4>{user?.display_name}</h4>

            </div>
        </div>

    )
}

export default Header