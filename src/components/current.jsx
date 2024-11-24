import React from "react";
import "../assets/style/current.css";
import { useState } from "react";
import { useEffect } from "react";

const Current = () => {
  let [currentLoc, setCurrentLoc] = useState(null);

  // if you want to avoid infinate loops put everything inside the use effect
  useEffect(() => {
    const success = (position) => {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      findCurrentLoc(lat, long);
    };

    const error = () => alert("please turn on your GPS location");
    navigator.geolocation.getCurrentPosition(success, error);

    const findCurrentLoc = (lat, long) => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=1c2664e16cd9dca0ca2c91a78a16c059`
      )
        .then((res) =>  res.status !== 200 ? console.log("somthing wrong") : res.json())
        .then((data) => data.cod === 200 && setCurrentLoc(data))
        .catch((err) => console.error(err));
    };
  }, []);

  // let name = currentLoc.name
  // let time = (currentLoc.dt % 86400) / (86400 * 24)
  // let wind = currentLoc.wind.speed
  // let temp = (currentLoc.main.temp - 273.15) + " C"
  // let min = (currentLoc.main.temp_min -273.15) + " C"
  // let max = (currentLoc.main.temp_max -273.15) + " C"
  // let description = currentLoc.weather[0].description
  // let icon = currentLoc.weather[0].icon
  let d = new Date();
  let time = d.toLocaleTimeString()
  console.log(currentLoc)

  // 86400 sec in 1 day
  // 3600 sec's in 1 hour
  //unix time is sec's since 01/01/1970
  // dt /86400 = nomber of days since 01/01/1970

  return (
    <div id="currentCon">
      <div className="display">
        {/* to refresh comment out image line first, then the rest, then uncomment everything except image and then uncomment image last */}
      <div className="location content">{currentLoc && currentLoc.name}</div>
      <div className="time content">{time}</div>
      <div className="currentTemp content">{currentLoc && Math.round(currentLoc.main.temp - 273.15) + " C"}</div>
      <div className="max content">{currentLoc && Math.round(currentLoc.main.temp_max -273.15) + " C"}</div>
      <div className="min content">{currentLoc && Math.round(currentLoc.main.temp_min -273.15) + " C"}</div>
      <div className="wind content">{currentLoc && currentLoc.wind.speed + " mph"}</div>
      <div className="discription content">{currentLoc && currentLoc.weather[0].description}</div>
      <div className="icon content"><img className="iconImg" src={`http://openweathermap.org/img/wn/${currentLoc && currentLoc.weather[0].icon}.png`}/></div> 
      </div>
    </div>
  );
};

export default Current;

// to ensure values always display both on screen and console, you must use condition on both promise and where you apply
