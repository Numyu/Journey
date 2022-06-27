import React from 'react'
import MostViewed from '../../Components/MostViewed/MostViewed'
import SearchBar from '../../Components/SearchBar/SearchBar'
import CtaMaps from '../../Components/CtaMaps/CtaMaps'

export default function LandingPage() {
    return (
        <>
            <SearchBar />
            <MostViewed />
            <CtaMaps />
        </>
    )
}
