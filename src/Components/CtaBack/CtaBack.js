import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function CtaBack(props) {
    const navigate = useNavigate()

    const ctaBack = <svg xmlns="http://www.w3.org/2000/svg" width="28" height="18" fill="none" viewBox="0 0 28 18">
                    <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m26.006 8.513-24.944.112m6.502-7.517L1.153 8.64l6.659 7.413"/>
                  </svg>

  console.log(props.valueLink);
  return (
    <div>
        <button className='cta-back' onClick={() => navigate(props.valueLink)}>{ctaBack} </button>
    </div>
  )
}
