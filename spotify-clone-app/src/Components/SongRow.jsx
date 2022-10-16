import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { songIdAtom } from "../Chart/SongIdAtom";
import "../SongRow.css";

function SongRow({ track, playsong }) {
  // const navigate = useNavigate();
  // const [songId, setSongId] = useRecoilState(songIdAtom);

  // const buttonClick = (id) => {
  //   console.log("f");
  //   setSongId(id);
  //   // navigate(`/chart/${id}`);
  // };

  return (
    <Link style={{ textDecoration: "none" }} to={`/chart/${track.id}`}>
      <div className="songRow">
        <img
          className="songRow__album"
          src={track.album.images[0].url}
          alt=""
        />
        <div className="songRow__info">
          <h1>{track.name}</h1>
          <p>
            {track.artists.map((artist) => artist.name).join(", ")} -{" "}
            {track.album.name}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default SongRow;
