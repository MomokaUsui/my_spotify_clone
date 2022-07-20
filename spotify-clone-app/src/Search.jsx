import React from 'react'
import MyHeader from './MyHeader'
import MySidebar from './MySidebar'
import SearchBody from './SearchBody'
import "./MyTrack.css"
import SearchSidebar from './SearchSidebar'

function Search() {
  return (
    <div className='MyTrack'>
        <SearchSidebar/>
        <SearchBody/>

    </div>
  )
}

export default Search
