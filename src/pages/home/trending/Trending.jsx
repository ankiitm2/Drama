import React from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTab/SwitchTabs'

const Trending = () => {

    const onTabsChange = () => { }

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <h1>Trending</h1>
                <SwitchTabs data={["Day", "Week"]} onTabsChange={onTabsChange} />
            </ContentWrapper>
        </div>
    )
}

export default Trending