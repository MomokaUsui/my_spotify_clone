import React from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { SongChart } from "./SongChart";
import { songIdAtom } from "./SongIdAtom";

export const MainChart = () => {
  const [songId, setSongId] = useRecoilState(songIdAtom);
  const { id } = useParams();
  console.log(id)
  console.log(songId)

  const buttonClick = (buttonId) => {
    console.log("useparamsのid",buttonId)
    setSongId(buttonId);
    console.log("paramsからidを取得!!!!", songId);
  };

  return (
    <div>
      <button className="button" onClick={()=>buttonClick(id)}>
        CHART 表示
      </button>
      <div>
        <SongChart />
      </div>
    </div>
  );
};
