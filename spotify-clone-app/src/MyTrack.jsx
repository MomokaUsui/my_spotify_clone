import React from 'react'
import MySidebar from './MySidebar'
import { useDataLayerValue } from "./DataLayer"
import MyBody from './MyBody'
import Sidebar from './Sidebar'
import "./MyTrack.css"


function MyTrack() {



    return (
        <div className='MyTrack'>
            <Sidebar/>

            {/* <MySidebar /> */}
            <MyBody />

        </div>
    )
}

export default MyTrack