import React from 'react'
import "./FiltersButton.css"
import { useState } from 'react';

export default function FiltersButton(props) {




  return (
    <div className='filter-button'>
        <p>{props.category}</p>
    </div>
  )
}
