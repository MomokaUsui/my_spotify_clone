import React from 'react'
import "./MyBody.css"
import Header from './Header'
import { useDataLayerValue } from "./DataLayer"
import { BiCircle, BiDotsHorizontal, BiHeart, BiHorizontalCenter, BiPlayCircle } from 'react-icons/bi';
import { BsHeartFill } from 'react-icons/bs';
import SongRow from './SongRow';
import MyHeader from './MyHeader';


function MyBody() {
    const [{ top_tracks }, dispatch] = useDataLayerValue();
    const [{ user }, dispatch2] = useDataLayerValue();
    console.log("tracks", top_tracks)
    return (
        <div>
            <div className='mybody'>
                <MyHeader/>
                <div className='mybody__info'>

                    <div className='mybody__infoText'>
                        <h3>{user.display_name}`s</h3>
                        <h2>Recently Played</h2>

                    </div>
                </div>

                <div className='mybody__songs'>

                    {top_tracks?.items.map((item) => (
                        <SongRow track={item.track} />
                    ))}

                    {/* {console.log(top_tracks.track)} */}
                </div>
            </div>
        </div>
    )
}

export default MyBody