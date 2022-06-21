import React from 'react'

export default function ItemCard(props) {
    return (

        <><div className={props.classCard}>
            <button onClick={() => { props.Navigate(props.id) }}>
            </button>
            <h3>
                {props.title}
            </h3>
        </div>

        </>

    )
}
