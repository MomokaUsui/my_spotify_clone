import React from 'react'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { useDataLayerValue } from '../DataLayer';

export const SongChart = () => {
  const [{features_track,tracks_features}] = useDataLayerValue();

  console.log(tracks_features.map((value) => {
    return value;
  }))
  

  console.log("!!!!!!!features!!!!!!!",features_track.danceability)
  console.log("!!!!!!!features!!!!!!!",features_track.energy)
  console.log("!!!!!!!features!!!!!!!",features_track.liveness)
  console.log("!!!!!!!features!!!!!!!",features_track.energy)
  console.log("!!!!!!!features!!!!!!!",features_track.speechiness)
  console.log("!!!!!!!features!!!!!!!",features_track.valence)


  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );
  
  const data = {
    labels: ["acousticness",'danceability', 'energy', 'liveness',  'speechiness', 'valence'],
    datasets: [
      {
        label: '# of Votes',
        data: [features_track.acousticness,features_track.danceability, features_track.energy, features_track.liveness, features_track.speechiness, features_track.valence],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div  >
        <Radar data={data} className='chart' />
    </div>
  )
}
