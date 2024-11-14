import React from "react";
import "../assets/style/current.css";
import { useState } from "react";
import { useEffect } from "react";

const Current = () => {
  let lat;
  let long;
 

  const CurrentLocation = () => {
    const success = (position) => {
      lat = position.coords.latitude;
      long = position.coords.longitude;
      fetchName();
    };

    const error = () => alert("please turn on your location");
    navigator.geolocation.getCurrentPosition(success, error);
  };



  let [currentLoc, setCurrentLoc] = useState(null);

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&limit=7&appid=1c2664e16cd9dca0ca2c91a78a16c059`
    )
      .then((res) => res.json())
      .then((data) => setCurrentLoc(data[0].name))
      .catch((err)=> console.error(err))
  });



  // fetch(
  //   `https://api.openweathermap.org/data/2.5/forecast?q=${data[0].name}&appid=1c2664e16cd9dca0ca2c91a78a16c059`
  // )
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //     //code stars hear
  //   });


  return (
    <div id="currentCon">
      <div className="display">
        <p>{CurrentLocation()}</p>
        <p>yess yess {currentLoc && console.log(currentLoc)}</p>
      </div>
    </div>
  );
};

export default Current;
