import React, { useEffect, useState } from 'react'
import "./style.scss";
import { useNavigate } from "react-router-dom";
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';

import Img from "../../../components/lazyload/Img"
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const HeroBanner = () => {
    const [background, setBackground] = useState("");
    const [query, setQuery] = useState("");
    const { url } = useSelector((state) => state.home);
    const navigation = useNavigate();

    const { data, loading } = useFetch("/movie/upcoming");

    useEffect(() => {
        const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
        setBackground(bg)
    }, [data]);

    const searchQueryHandle = () => {
        if (query.length > 0) {
            navigation(`/search/${query}`);
        }
    };

    const handleSearch = (event) => {
        if (event.key === "Enter") {
            searchQueryHandle();
        }
    };

    return (
        <div className='HeroBanner'>

            {!loading && <div className='backdropImg'>
                <Img src={background} />
            </div>}

            <div className="opacity-layer"></div>
            <ContentWrapper>
                <div className="bannerContent">
                    <h1>WELCOME!!</h1>
                    <p>watch unlimited Movies and shows</p>
                    <div className="inputBox">
                        <input onChange={(e) => setQuery(e.target.value)} onKeyUp={handleSearch} type="text" placeholder='Search for a Movie or TV show...' /><button onClick={searchQueryHandle}>Search</button>
                    </div>
                </div>
            </ContentWrapper>

        </div>
    )
}

export default HeroBanner