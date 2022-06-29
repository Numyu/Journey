import React from 'react'
import CtaBack from '../../Components/CtaBack/CtaBack'
import "./NotFound.css"


export default function NotFound() {
  return (
    <div>
        <div>
            <CtaBack valueLink={`/`} />
            <h2 className="not-found-page-title">Page not found</h2>
        </div>

        <div className='container-logo'>
            <img
                src={process.env.PUBLIC_URL + '/images/icons/journey-logo.png'}
                alt="logo"
                className="logo-not-found"
            />
        </div>

        
    </div>
  )
}
