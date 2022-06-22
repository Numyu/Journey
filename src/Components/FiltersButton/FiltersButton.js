import React from 'react'
import "./FiltersButton.css"


export default function FiltersButton(props) {




  return (
    <div className='filter-button' onClick={() => props.getCat(props.category)}>
        <p>{props.category}</p>
    </div>
  )
}
