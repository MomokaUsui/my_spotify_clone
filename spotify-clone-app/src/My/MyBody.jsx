import React from "react";
import "../MyBody.css";
import Header from "../Components/Header";
import { useDataLayerValue } from "../DataLayer";
import {
  BiCircle,
  BiDotsHorizontal,
  BiHeart,
  BiHorizontalCenter,
  BiPlayCircle,
} from "react-icons/bi";
import { BsHeartFill } from "react-icons/bs";
import SongRow from "../Components/SongRow";
import MyHeader from "./MyHeader";
import { SongChart } from "../Chart/SongChart";

function MyBody() {
  const [{ top_tracks, user, analysis_track,track_features}] = useDataLayerValue();

  console.log("tracks", top_tracks);
  console.log("analysis_track!!!!!!!",analysis_track)
  console.log("!!!!!!!features!!!!!!!",track_features)

  return (
    <div>
      <div className="mybody">
        <MyHeader />
        <div className="mybody__info">
          <div className="mybody__infoText">
            <h3>{user.display_name}`s</h3>
            <h2>Recently Played</h2>
          </div>
        </div>

        <div className="mybody__songs">
          {top_tracks?.items.map((item) => (
            <SongRow track={item.track} />
          ))}
          {/* {search_track?.tracks.items.map((item) => (
            <SongRow track={item} /> */}
           
        
          {/* ))} */}

          {/* {console.log(top_tracks.track)} */}
        </div>
      </div>
    </div>
  );
}

export default MyBody;
