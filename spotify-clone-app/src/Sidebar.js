import React from 'react'
import "./Sidebar.css"
import SidebarOption from './SidebarOption'
import { AiFillHome } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { BiLibrary } from "react-icons/bi";
import { getTokenFromResponse } from "./spotify";
// import { useStateValue } from "./StateProvider";
import { useDataLayerValue } from './DataLayer';



function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayerValue();
    console.log(playlists);

    return (
        <div className='sidebar'>
            <img
                className="sidebar__logo"
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt=""
            />
            <SidebarOption Icon={AiFillHome} title="Home" />
            <SidebarOption Icon={BsSearch} title="Search" />
            <SidebarOption Icon={BiLibrary} title="Your Library" />
            <br />

            <strong className='sidebar__title'>PLAYLISTS</strong>
            <hr />
           
            {playlists?.items?.map((playlist) => (
                <SidebarOption option={playlist.name} />
            ))}
        </div>
    );
}

export default Sidebar