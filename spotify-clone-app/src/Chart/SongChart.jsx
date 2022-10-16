import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { useDataLayerValue } from "../DataLayer";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { songIdAtom } from "./SongIdAtom";

export const SongChart = () => {
  // const { id } = useParams();
  const [ songId, setSongId ] = useRecoilState(songIdAtom);
  // await setSongId(id)

  const [{ track_features, tracks_features }] = useDataLayerValue();
  console.log(track_features)

  // console.log(songId)
  const musics = tracks_features.audio_features.map((value) => {
    return (value).danceability;
  });
  

  console.log(musics)
  console.log("!!!!!!!features!!!!!!!", track_features.danceability);
  console.log("!!!!!!!features!!!!!!!", track_features.energy);
  console.log("!!!!!!!features!!!!!!!", track_features.liveness);
  console.log("!!!!!!!features!!!!!!!", track_features.energy);
  console.log("!!!!!!!features!!!!!!!", track_features.speechiness);
  console.log("!!!!!!!features!!!!!!!", track_features.valence);

  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );

  const data = {
    labels: [
      "acousticness",
      "danceability",
      "energy",
      "liveness",
      "speechiness",
      "valence",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [
          track_features.acousticness,
          track_features.danceability,
          track_features.energy,
          track_features.liveness,
          track_features.speechiness,
          track_features.valence,
        ],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Radar data={data} className="chart" />
    </div>
  );
};
