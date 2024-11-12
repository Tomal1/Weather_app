import React from "react";
import { useState } from "react";
import "../assets/style/Nav.css"

const Nav = () =>{

    const [location, setLocation] = useState("")

        
    const handleSearch = () =>{
        let currentLocatin = toString(help())

        console.log("xcx",currentLocatin)
    
    }
    
    return(
        <>
                <p>todays weather</p>
                
                <div className="searchBox">
                <label>search location</label>
                    <form>
                        
                        <input type="text" value={location} onChange={(e)=>setLocation(e.target.value)}/>
                        <input type="button" value="search" onClick={() => handleSearch()}/>
                    </form>
                </div>
                
        
        </>

    )

}

export default Nav