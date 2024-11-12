import React from "react";
import "../assets/style/current.css"





const Current =()=>{

    const CurrentLocation = () => {

        let lat;
        let long;
        let name;

        const success = (position) => {

            lat = position.coords.latitude
            long = position.coords.longitude
            fetchName()

        };
        const error = () => alert("please turn on your location")
        navigator.geolocation.getCurrentPosition(success, error);
        
        const fetchName = () =>{
            fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&limit=7&appid=1c2664e16cd9dca0ca2c91a78a16c059`)
            // fetch( `https://api.openweathermap.org/data/2.5/forecast?q=${arg}&appid=1c2664e16cd9dca0ca2c91a78a16c059`)
              .then(response => response.json())
              .then(data => {
              name = data[0].name
              });
        }

        console.log("this is my location",name)
    
    };
    
      
    // const auto = () =>{
    //     console.log()  

    // //     fetch( `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=1c2664e16cd9dca0ca2c91a78a16c059`)
    // //         .then((response) => {
    // //         console.log(response);
    // //         return response.json();
    // //     })
    // //     .then((data) => {
    // //     console.log(data);
        
    // //   });
        
    // }

    return(
        <div id="currentCon">
            <div className="display">
                <p>xxx{()=>CurrentLocation()}</p>
            </div>

        </div>
    )


}

export default Current