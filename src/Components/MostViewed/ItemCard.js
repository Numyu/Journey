import React from 'react'

export default function ItemCard(props) {
    return (

        <>
            <button className={props.classCard} onClick={() => { props.Navigate(props.id) }}>
            </button>
            <h3>
                {props.title}
            </h3>
        </>

    )
}
