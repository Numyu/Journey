import React from 'react'


export default function GeneratedCard(props) {
    return (

            <div className={props.classCard} id={props.id}>
                <div className='card-mosaic'>
                    <button onClick={() => { props.Navigate(props.id) }}>
                    </button>
                    <h3>
                        {props.title}
                    </h3>
                </div>

            </div>

    )
}
