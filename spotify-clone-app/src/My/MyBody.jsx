import React from "react";
import "../MyBody.css";
import { useDataLayerValue } from "../DataLayer";
import SongRow from "../Components/SongRow";
import MyHeader from "./MyHeader";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { songIdAtom } from "../Chart/SongIdAtom";

function MyBody() {
  const [{ top_tracks, user, analysis_track, track_features }] = useDataLayerValue();
  const navigate = useNavigate();
  const [songId, setSongId] = useRecoilState(songIdAtom);
  const buttonClick = (id) => {
    console.log("f");
    setSongId(id);
    navigate(`/chart/${id}`);
  };

  return (
    <div>
      <div className="myBody">
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
        </div>
      </div>
    </div>
  );
}

export default MyBody;
