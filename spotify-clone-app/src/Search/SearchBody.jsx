import React from "react";
import "../SearchBody.css";
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
import MyHeader from "../My/MyHeader";
import { useRecoilState } from "recoil";
import { searchAtom } from "../SearchAtom";

function SearchBody() {
  const [{ search_track }, _] = useDataLayerValue();
  const word = useRecoilState(searchAtom);
  console.log("word", word);

  console.log("track😊", search_track);
  console.log("track😎", search_track.tracks.items);

  return (
    <div>
      <div className="searchbody">
        <MyHeader />
        <div className="searchbody__info">
          <div className="searchbody__infoText">
            <h2>Search Result</h2>
          </div>
        </div>

        <div className="searchbody__songs">
          {search_track?.tracks.items.map((item) => (
            <SongRow track={item} />
          ))}

          {/* {console.log(top_tracks.track)} */}
        </div>
      </div>
    </div>
  );
}

export default SearchBody;
