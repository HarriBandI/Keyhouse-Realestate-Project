import React from 'react'
import Home from './Home'
import Sections from './Sections'
import HomeImages from './HomeImages'
import HomeClients from './HomeClients'

function HomeIndex() {
    return (
        <div>
            <Home/>
            <Sections/>
            <HomeImages/>
            <HomeClients/>
        </div>
    )
}

export default HomeIndex
