import React, { useState, useEffect } from "react";
import "./SearchBar.css";
import data from "../../data/data.json";
import ResultsSearch from "./ResultsSearch";

export default function SearchBar() {
  const svg_magnifying_glass = (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.66666 14.3333C11.3485 14.3333 14.3333 11.3486 14.3333 7.66666C14.3333 3.98476 11.3485 1 7.66666 1C3.98476 1 1 3.98476 1 7.66666C1 11.3486 3.98476 14.3333 7.66666 14.3333Z"
        stroke="#BBBBBB"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16 16L12.375 12.375"
        stroke="#BBBBBB"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );

  const [inputValue, setInputValue] = useState("");
  const [apiValue, setApiValue] = useState([]);
  const [stores, setStores] = useState([]);

  useEffect(() => {
    setStores(data);
  }, [stores]);

  useEffect(() => {
    const result = [];
    stores.forEach((element) => {
      if (
        element.fields.nom_du_commerce
          .toLowerCase()
          .includes(inputValue.toLowerCase())
      ) {
        result.push(element);
        console.log(result);

      }
      if (inputValue === "") {
        result.pop();
      }
    });
    setApiValue(result);
  }, [inputValue]);

  const take_value = (e) => {
    setInputValue(e);
  };

  const nav = (id) => {
    // Retourne l'id de l'élément séléctionné
    console.log(id);
  };

  return (
    <>
      <form className="search-bar-form">
        <input
          onChange={(e) => take_value(e.target.value)}
          className="search-bar"
          type="text"
          placeholder="Looking for something ?"
          value={inputValue}
        ></input>
        <button className="magnifying-glass">{svg_magnifying_glass} </button>
      </form>
      <div className="autocomplete-results">
        {apiValue.map((item, index) => {
          return (
            <ResultsSearch
              key={index}
              id={item.recordid}
              name={item.fields.nom_du_commerce}
              navigate={nav}
            />
          );
        })}
      </div>
    </>
  );
}
