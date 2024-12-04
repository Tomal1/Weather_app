import React from "react";
import "../assets/style/current.css";
import { useState } from "react";
import { useEffect } from "react";
import FiveDays from "./fiveDays";
import MapComp from "./mapComp";

const Current = () => {
  let [currentLoc, setCurrentLoc] = useState(null);
  let [searchLoc, setSearchLoc] = useState("");

  // if you want to avoid infinate loops put everything inside the use effect

  const success = (position) => {

    let coordObj = {
      lat: position.coords.latitude,
      long: position.coords.longitude,
    };
    ///searchLoc is not getting registered hear

    searchLoc === "" ? findCurrentLoc(coordObj) : updateSearchLoc()
  };

  const updateSearchLoc = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${searchLoc}&appid=1c2664e16cd9dca0ca2c91a78a16c059`
    )
      .then((res) =>
        res.status !== 200 ? console.log("somthing wrong") : res.json()
      )
      .then((data) => {

        let coordObj = {
          lat: data.city.coord.lat,
          long: data.city.coord.lon,
        };

        findCurrentLoc(coordObj)

      
      });
  };

  const findCurrentLoc = (arg) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${arg.lat}&lon=${arg.long}&appid=1c2664e16cd9dca0ca2c91a78a16c059`
    )
      .then((res) =>
        res.status !== 200 ? console.log("somthing wrong") : res.json()
      )
      .then((data) => data.cod === 200 && setCurrentLoc(data))
      .catch((err) => console.error(err));
  };



  
  useEffect(() => {
    


    const error = () => alert("please turn on your GPS location");
    navigator.geolocation.watchPosition(success, error); //getCurrentPosition() will only get position once but this one will keep tracking

    /*
    in hear we need to creat a condition where if user provides a location
    we will execuate a search function else we will execcute findCurrentLoc function
    */

  }, []);

  let d = new Date();
  let time = d.toLocaleTimeString();

  // 86400 sec in 1 day
  // 3600 sec's in 1 hour
  //unix time is sec's since 01/01/1970
  // dt /86400 = nomber of days since 01/01/1970


  return (
    currentLoc && (
      <div id="currentCon">
        <div className="display">
          {/* to refresh comment out image line first, then the rest, then uncomment everything except image and then uncomment image last */}
          <div className="location content">{currentLoc.name}</div>
          <div className="time content">{time}</div>
          <div className="currentTemp content">
            {Math.round(currentLoc.main.temp - 273.15) + " C"}
          </div>
          <div className="max content">
            {Math.round(currentLoc.main.temp_max - 273.15) + " C"}
          </div>
          <div className="min content">
            {Math.round(currentLoc.main.temp_min - 273.15) + " C"}
          </div>
          <div className="wind content">{currentLoc.wind.speed + " mph"}</div>
          <div className="discription content">
            {currentLoc.weather[0].description}
          </div>
          <div className="icon content">
            <img
              className="iconImg"
              src={`http://openweathermap.org/img/wn/${currentLoc.weather[0].icon}.png`}
            />
          </div>
        </div>
        {<FiveDays location={currentLoc.name} />}
        {<MapComp lat={currentLoc.coord.lat} lon={currentLoc.coord.lon} />}

        {/* <div className="searchBox">
            <input
              type="text"
              value={searchLoc}
              onChange={(e)=> setSearchLoc(e.target.value)}
              className="inputField"
            />
            <button className="inputBtn">search</button>
     
        </div> */}
      </div>
    )
  );
};

export default Current;

// to ensure values always display both on screen and console, you must use condition on both promise and where you apply
