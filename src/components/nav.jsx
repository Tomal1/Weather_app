import React from "react";
import { useState } from "react";

// import helper from "./helper";

import "../assets/style/Nav.css"





const Nav = () =>{

    const [location, setLocation] = useState("")

        
    const handleSearch = () =>{
    
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