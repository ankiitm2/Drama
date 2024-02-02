import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import InfiniteScroll from "react-infinite-scroll-component"

import "./style.scss"

import { fetchDataFromApi } from "../../utils/api";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper"


const SearchResults = () => {
    return (
        <div>SearchResults</div>
    )
}

export default SearchResults