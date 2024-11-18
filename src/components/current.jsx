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
   
    };

    const error = () => alert("please turn on your location");
    navigator.geolocation.getCurrentPosition(success, error);
  };



//   let [currentLoc, setCurrentLoc] = useState(null);

//   useEffect(() => {
//     fetch(
//       `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&limit=7&appid=1c2664e16cd9dca0ca2c91a78a16c059`
//     )
//       .then((res) => res.json())
//       .then((data) => setCurrentLoc(data[0].name))
//       .catch((err)=> console.error(err))
//   },[]);

//   currentLoc && console.log(currentLoc)


  let [searchData, setSearchData] = useState(null)


  const searchLoc =()=>{
    // renderCurrent()
    
    
    useEffect(() =>{
        fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=dudley&appid=1c2664e16cd9dca0ca2c91a78a16c059`
          )
            .then((res) => res.json())
            .then((data) => setSearchData(data));
      },[])
  }



  let name = searchData.city.name
  let maxT = searchData.list[0].main.temp_max
  let minT = searchData.list[0].main.temp_max
  let humidity = searchData.list[0].main.humidity
  let pressure = searchData.list[0].main.pressure
  let discription = searchData.list[0].weather[0].discription
  let icon = searchData.list[0].weather[0].icon
  let windObj= searchData.list[0].wind
  let dt = searchData.list[0].dt

  const renderCurrent = ()=>{

    return (
        <div>hell</div>

    )

  }



  return (
    <div id="currentCon">
      <div className="display">
        <p>{CurrentLocation()}</p>
        <p>{searchLoc()}</p>
        
        
      </div>
    </div>
  );
};

export default Current;
