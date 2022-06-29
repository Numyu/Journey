import React from 'react'
import './CtaMaps.css'
import { useState, useEffect } from 'react'
export default function CtaMaps(props) {

    const [wayPoints, setWayPoints] = useState([]);

    useEffect(() => {
        const newItinerary = [];
        props.selectedItinerary.forEach(element => {
            newItinerary.push({address: element.address});
        });
        setWayPoints(newItinerary);
    }, [props]);

     // Variable contenant l'adresse de départ
    const [originAddress, setOriginAddress] = useState();

    // Variable contenant l'adresse d'arrivée
    const [destinationAddress, setDestinationAddress] = useState();

    useEffect(() => {
        console.log(wayPoints);
        if(wayPoints.length> 0)
        {
            setOriginAddress(wayPoints[0].address);
            setDestinationAddress(wayPoints[wayPoints.length - 1].address);  
        }
    }, [wayPoints]);


    // Varible contenant les différentes étapes excepté l'adresse de départ et l'adresse d'arrivée
    let wayPointsWithoutCurrent = undefined;
    let url = undefined;
    let urlEncode = undefined;

    if(originAddress != undefined && destinationAddress != undefined)
    {
        // Varible contenant les différentes étapes excepté l'adresse de départ et l'adresse d'arrivée
        wayPointsWithoutCurrent = wayPoints.filter(function (way) {
            return way.address !== originAddress && way.address !== destinationAddress
        })
        // URL non-encodé qui permettra d'ouvrir une page google map
        url = "https://www.google.com/maps/dir/?api=1&origin=" + originAddress + "&travelmode=walking&waypoints=" + wayPointsWithoutCurrent.map(item => { return item.address + "|" }) + "&destination=" + destinationAddress;
        // Encodage de l'URL
        urlEncode = encodeURI(url);
    }

    return (
        <button className='cta-google-map' >
            <a href={urlEncode} target='_blank' className='content-text'>Open in Google Maps</a>
        </button>
    )
}
