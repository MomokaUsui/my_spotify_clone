import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "../DataLayer";
import { SongChart } from "./SongChart";
import { songIdAtom } from "./SongIdAtom";
import "./MainChart.css";
const spotify = new SpotifyWebApi();

export const MainChart = () => {
  const [{ user }, dispatch] = useDataLayerValue();
  const [songId] = useRecoilState(songIdAtom);
  console.log(songId);

  useEffect(() => {
    spotify.getAudioFeaturesForTrack(songId).then((response) =>
      dispatch({
        type: "AUDIO_FEATURES",
        track_features: response,
      })
    );
  }, []);


  const [{ track_features }] = useDataLayerValue();
  console.log(track_features);

  return (
    <div className="mainChart">
      {track_features ? (
        <>
          <div className="title">楽曲分析</div>
          <div className="chart">
            <SongChart track_features={track_features} />
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
