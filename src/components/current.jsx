import React from "react";
import "../assets/style/current.css";
import { useState } from "react";
import { useEffect } from "react";

const Current = () => {
  let lat;
  let long;

  const latLong = () => {
    const success = (position) => {
      lat = position.coords.latitude;
      long = position.coords.longitude;

      findCurrentLocation();
    };

    const error = () => alert("please turn on your location");
    navigator.geolocation.getCurrentPosition(success, error);
  };
  
  // latLong()

  let [currentLoc, setCurrentLoc] = useState(null);

  const findCurrentLocation = () => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&limit=7&appid=1c2664e16cd9dca0ca2c91a78a16c059`
    )
      .then((res) => res.json())
      .then((data) => {
        setCurrentLoc(data[0].name);
      })
      .catch((err) => console.error(err));


  };

// 86400 sec in 1 day
// 3600 sec's in 1 hour
//unix time is sec's since 01/01/1970
// dt /86400 = nomber of days since 01/01/1970
  let [info, setInfo] = useState(null)

  useEffect(()=>{
    currentLoc &&
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=dudley&appid=1c2664e16cd9dca0ca2c91a78a16c059`
    )
      .then((res) => res.json())
      .then((data) => {
        data && setInfo(data)
        console.log("location name", data.city.name )
        console.log("forcast until",((data.list[0].dt % 86400) / 86400) * 24 +":00")
        console.log("Current temp",(Math.round(data.list[0].main.temp-273.15))+" C")
        console.log("max",(Math.round(data.list[0].main.temp_max-273.15))+" C")
        console.log("min",(Math.round(data.list[0].main.temp_min-273.15))+" C")
        console.log("discription:",data.list[0].weather[0].description)
        console.log("icon",data.list[0].weather[0].icon)
        console.log("wind-speed:",data.list[0].wind.speed +" mph")
      });
 
  },[])


//info.city.name

  return (
    <div id="currentCon">
      <div className="display">
        <div>{console.log(info)}</div>
        <div className="location content">loc</div>
        <div className="time content">time</div>
        <div className="currentTemp content">Current temp</div>
        <div className="max content">max</div>
        <div className="min content">min</div>
        <div className="wind content">wind</div>
        <div className="discription content">dis</div>
        <div className="icon content">icon</div>
      </div>
    </div>
  );
};

export default Current;
