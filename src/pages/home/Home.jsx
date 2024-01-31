import React from 'react'
import "./style.scss"
import HeroBanner from "./heroBanner/HeroBanner"
import Trending from './trending/Trending'
import Popular from './popular/Popular'

const Home = () => {
    return (
        <div className='Home'>
            <HeroBanner />
            <Trending />
            <Popular />
        </div>
    )
}

export default Home