import React from 'react'
import "./FilterCard.css"


export default function FilterCard(props) {

  return (
    <div className='filter-button' onClick={() => props.getCat(props.category)}>

      <img src={props.image} alt="icone-filter" id="filter-button-image"></img>

      
      <p className='filter-button-text'>{props.name}</p>
    
    </div>
  )
}