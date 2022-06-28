import React from 'react'
import './CtaMaps.css'
import { useState, useEffect } from 'react'
export default function CtaMaps() {
    // Liste des adresses 

    const [waypoints, setWayPoints] = useState([
        { address: "Porte de l'Essonne, 91200 Athis-Mons" },
        { address: "Belle Épine, Rue du Luxembourg, 94320 Thiais" },
        { address: "Lidl, Cr de Verdun, 94290 Villeneuve-le-Roi" },
        { address: "E.Leclerc ORLY, 8 Place Gaston Viens, 94310 Orly" }
    ])

    // Variable contenant l'adresse de départ
    const origin_address = waypoints[0].address
    // Variable contenant l'adresse d'arrivée
    const destination_address = waypoints[waypoints.length - 1].address

    // Varible contenant les différentes étapes excepté l'adresse de départ et l'adresse d'arrivée
    const waypoints_without_current = waypoints.filter(function (way) {
        return way.address !== origin_address && way.address !== destination_address
    })

    // URL non-encodé qui permettra d'ouvrir une page google map
    const url = "https://www.google.com/maps/dir/?api=1&origin=" + waypoints[0].address + "&travelmode=walking&waypoints=" + waypoints_without_current.map(item => { return item.address + "|" }) + "&destination=" + destination_address;
    // Encodage de l'URL
    const url_encode = encodeURI(url)

    return (
        <button className='cta-google-map' >
            <a href={url_encode} target='_blank' className='content-text'>Open in Google Maps</a>
        </button>

    )
}
