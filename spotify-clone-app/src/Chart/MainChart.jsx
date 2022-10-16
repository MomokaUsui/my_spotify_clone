import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "../DataLayer";
import { SongChart } from "./SongChart";
import { songIdAtom } from "./SongIdAtom";
const spotify = new SpotifyWebApi();

export const MainChart =  () => {
  const [{ user }, dispatch] = useDataLayerValue();
  const [songId, setSongId] = useRecoilState(songIdAtom);
  const { id } = useParams();
  console.log(songId);

  useEffect(() => {
    spotify.getAudioFeaturesForTrack(songId).then((response) =>
      dispatch({
        type: "AUDIO_FEATURES",
        track_features: response,
      })
    );
  }, []);
  const [{ track_features, tracks_features }] = useDataLayerValue();
  console.log(track_features);
  const buttonClick = (buttonId) => {
    console.log("useparamsのid", buttonId);
    setSongId(buttonId);
    console.log("paramsからidを取得!!!!", songId);
  };

  return (
    <div>
      {track_features ? (
        <>
          <SongChart track_features={track_features}/>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
