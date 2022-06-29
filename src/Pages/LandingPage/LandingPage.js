import React from 'react';
import CarouselCard from "../../Components/CarouselCard/CarouselCard";
import MostViewed from '../../Components/MostViewed/MostViewed'
import SearchBar from '../../Components/SearchBar/SearchBar'

export default function LandingPage() {
    return (
        <>
            <SearchBar />
            <MostViewed />
            <CarouselCard/> 
        </>
    )
}
