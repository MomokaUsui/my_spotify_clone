import React from 'react'
import MyHeader from '../My/MyHeader'
import MySidebar from '../My/MySidebar'
import SearchBody from './SearchBody'
import "../MyTrack.css"
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
