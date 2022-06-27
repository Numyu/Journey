import React from 'react'



export default function GeneratedCard(props) {


    

        
  


 
    return (

            <div className={props.classCard} id={props.id}>
                <div className='card-mosaic' onClick={() => props.NavFunc(props.title)}>
                    <button>
                    </button>
                    <h3>
                        {props.title}
                    </h3>
                </div>

            </div>

    )
}
