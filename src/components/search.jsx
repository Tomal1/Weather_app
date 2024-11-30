import React from "react";
import { useState } from "react";
import "../assets/style/search.css"

const Search = () => {

const [location, setLocation] = useState("");

const handleSearch = () => {
  let currentLocatin = toString(help());

  console.log("xcx", currentLocatin);
};


  return (
    <>
      <div className="searchBox">
        {/* <label>search location</label> */}
        <form>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="inputField" 
          />
          <input type="button" value="search" onClick={() => handleSearch()} className="inputBtn"/>
        </form>
      </div>
    </>
  );
};

export default Search;
