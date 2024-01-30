import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTab/SwitchTabs'
import useFetch from "../../../hooks/useFetch"
import Carousel from '../../../components/carousel/Carousel'

const Trending = () => {
    const [endPoint, setEndPoint] = useState("day");

    const { data, loading } = useFetch(`/trending/movie/${endPoint}`)

    const onTabsChange = (tab) => {
        setEndPoint(tab === "Day" ? "day" : "week");
    }

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <h1>Trending</h1>
                <SwitchTabs data={["Day", "Week"]} onTabsChange={onTabsChange} />
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} />
        </div>
    )
}

export default Trending