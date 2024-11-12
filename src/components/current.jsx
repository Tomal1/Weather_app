import React from "react";
import "../assets/style/current.css"





const Current =()=>{

    const CurrentLocation = () => {

        const success = (position) => {



            // console.log(position.coords.latitude)
            // console.log(position.coords.longitude)

            return position.coords.longitude
        //   fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&limit=7&appid=1c2664e16cd9dca0ca2c91a78a16c059`)
        //   // fetch( `https://api.openweathermap.org/data/2.5/forecast?q=${arg}&appid=1c2664e16cd9dca0ca2c91a78a16c059`)
        //     .then(response => response.json())
        //     .then(data => {
        //     return data[0].name
        //     });
        };

        const error = () => alert("please turn on your location")
      
        navigator.geolocation.getCurrentPosition(success, error);
    
        
      };
    
    
      console.log(CurrentLocation())
    
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