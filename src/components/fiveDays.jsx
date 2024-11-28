import React from "react";
import "../assets/style/fiveDays.css"
import { useEffect } from "react";
import { useState } from "react";

const FiveDays = (props) =>{

  let [info, setInfo] = useState(null);


useEffect(()=>{
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${props.location}&appid=1c2664e16cd9dca0ca2c91a78a16c059`
    )
      .then((res) => res.json())
      .then((data) => {
        

        let forcast = data.list

        let one = []

        for(let i=7; i<=42; i=i+8){

          one.push(forcast[i])
        }

        setInfo(one)
      })

  },[])





    return(
            <div id="fiveDay">

              <div class="day1 day">
                <div class="date">date</div>
                <div class="icon1">image</div>
                <div class="maxTemp">max</div>
                <div class="minTemp">min</div>
              </div>
              <div class="day2 day">
                <div class="date">date</div>
                <div class="icon1">image</div>
                <div class="maxTemp">max</div>
                <div class="minTemp">min</div>
              </div>
              <div class="day3 day">
                <div class="date">date</div>
                <div class="icon1">image</div>
                <div class="maxTemp">max</div>
                <div class="minTemp">min</div>
              </div>
              <div class="day4 day">
                <div class="date">date</div>
                <div class="icon1"> image</div>
                <div class="maxTemp">max</div>
                <div class="minTemp">min</div>
              </div>
              <div class="day5 day">
                <div class="date">date</div>
                <div class="icon1">image</div>
                <div class="maxTemp">max</div>
                <div class="minTemp">min</div>
              </div>
            </div>
            )

}

export default FiveDays