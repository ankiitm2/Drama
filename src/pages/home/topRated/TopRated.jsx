import { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTab/SwitchTabs'
import useFetch from "../../../hooks/useFetch"
import Carousel from '../../../components/carousel/Carousel'

const TopRated = () => {
    const [endPoint, setEndPoint] = useState("movie");

    const { data, loading } = useFetch(`/${endPoint}/top_rated`)

    const onTabsChange = (tab) => {
        setEndPoint(tab === "Movies" ? "movie" : "tv");
    }

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <h1>TopRated</h1>
                <SwitchTabs data={["Movies", "TV Shows"]} onTabsChange={onTabsChange} />
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} endPoint={endPoint} />
        </div>
    )
}

export default TopRated