import React, { useState, useEffect } from "react";
import "./SearchBar.css";

export default function ResultsSearch(props) {
  return (
    <>
      <div className="results-search">
        <button
          className="monuments-buttons"
          id={props.id}
          onClick={() => {
            props.navigate(props.id);
          }}
        >
          {props.name}
        </button>
      </div>
    </>
  );
}
