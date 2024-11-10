import React from "react";
import { useState } from "react";

// import helper from "./helper";

import "../assets/style/Nav.css"





const Nav = () =>{

    const [location, setLocation] = useState("")







        
    const handleSearch = () =>{



        
        const success = (position) => {
            let lat = position.coords.latitude
            let long = position.coords.longitude

            let arg ="Dudley"

            // first fetch only gets current location name 
            // fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&limit=7&appid=1c2664e16cd9dca0ca2c91a78a16c059`)
            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${arg}&appid=1c2664e16cd9dca0ca2c91a78a16c059`)
            .then((response)=>{

                console.log(response)
             return response.json()
    
            })
            .then((data)=>{
    
                console.log("xxx",data)
            })
        }

        const error = () =>{
            alert("cant retrive location");
        }

        navigator.geolocation.getCurrentPosition(success, error);


    
    }
    
    return(
        <>
                <p>todays weather</p>
                
                <div className="searchBox">
                <label>search location</label>
                    <form>
                        
                        <input type="text" value={location} onChange={(e)=>setLocation(e.target.value)}/>
                        <input type="button" value="search" onClick={() =>handleSearch()}/>
                    </form>
                </div>
                
        
        </>

    )

}

export default Nav