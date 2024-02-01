import { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTab/SwitchTabs'
import useFetch from "../../../hooks/useFetch"
import Carousel from '../../../components/carousel/Carousel'

const Popular = () => {
    const [endPoint, setEndPoint] = useState("movie");

    const { data, loading } = useFetch(`/${endPoint}/popular`)

    const onTabsChange = (tab) => {
        console.log('Tab:', tab);
        setEndPoint(tab === "Movie" ? "movie" : "tv");
        console.log('EndPoint:', endPoint);
    }

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <h1>Popular</h1>
                <SwitchTabs data={["Movie", "TV Shows"]} onTabsChange={onTabsChange} />
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} endPoint={endPoint} />
        </div>
    )
}

export default Popular