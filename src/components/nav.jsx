import React from "react";
import { useState } from "react";

import "../assets/style/Nav.css"


const Nav = () =>{

    const [location, setLocation] = useState("")

    const handleSearch = (e) =>{
        e.prevantDefault()
    }
    
    return(
        <>
                <p>todays weather</p>
                
                <div className="searchBox">
                <label>search location</label>
                    <form>
                        
                        <input type="text" value={location} onChange={(e)=>setLocation(e.target.value)}/>
                        <input type="button" value="search" onClick={() =>handleSearch(e)}/>
                    </form>
                </div>
                
        
        </>

    )

}

export default Nav