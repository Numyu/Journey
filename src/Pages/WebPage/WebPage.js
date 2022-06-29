import React from 'react'
import './WebPage.css'

export default function WebPage() {
  return (
    <div className="WebPage">
      <div className="presentation">
        <img
          src={process.env.PUBLIC_URL + '/images/mockups/mockup-first.png'}
          alt="mockup téléphone"
          className="first-mockup"
        />
        <div>
          <img
            src={process.env.PUBLIC_URL + '/images/icons/journey-logo.png'}
            alt="mockup téléphone"
            className="logo"
          />
          <p>Discover authentic local French stores next</p>
          <p>
            to the <span> most famous </span> tourist attractions
          </p>
        </div>
      </div>

      <div className="experience">
        <h2>
          <span>Experience traveling like never before. </span>
        </h2>
        <p>Discovering cities in their real context isn’t always easy.</p>
        <p>
          People tend to choose the biggest stores by default, which are not
          always very representative of the local culture habits.
        </p>
        <p>
          Journey decided to put in the forefront small merchants to enable
          tourists to explore what local craftmanship has best to offer.
        </p>
        <p>
          <span> Journey </span>, the authentic experience
        </p>
      </div>

      <div className="application">
        <img
          src={process.env.PUBLIC_URL + '/images/mockups/mockup-3phones.png'}
          alt="mockup application"
          className="second-mockup"
        />
        <div className="description">
          <h2>
            <span>Enjoy fluidity.</span>
          </h2>
          <p id="text">
            We designed an easy to use mobile-first solution to keep you
            informed in real time during your travel ! Only four steps to
            <span> go </span> :
          </p>

          <div className="functionality">
            <img
              src={process.env.PUBLIC_URL + '/images/icons/search.svg'}
              alt="icon search"
              className="icon"
            />
            <p>
              Choose your next <span>visit</span>
            </p>
          </div>

          <div className="functionality">
            <img
              src={process.env.PUBLIC_URL + '/images/icons/itinerary.svg'}
              alt="icon itinerary"
              className="icon"
            />
            <p>
              Pick an <span>itinerary</span>
            </p>
          </div>

          <div className="functionality">
            <img
              src={process.env.PUBLIC_URL + '/images/icons/selection.svg'}
              alt="icon selection"
              className="icon"
            />
            <p>
              Review the <span>stops</span> that you want
            </p>
          </div>

          <div className="functionality">
            <img
              src={process.env.PUBLIC_URL + '/images/icons/map.svg'}
              alt="icon map"
              className="icon"
            />
            <p>
              Open in maps, and <span>here you go ! </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
