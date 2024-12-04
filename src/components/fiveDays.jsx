import React from "react";
import "../assets/style/fiveDays.css";
import { useEffect } from "react";
import { useState } from "react";

const FiveDays = (props) => {
  let [info, setInfo] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${props.location}&appid=1c2664e16cd9dca0ca2c91a78a16c059`
    )
      .then((res) =>
        res.status !== 200 ? console.log("somthing wrong") : res.json()
      )
      .then((data) => {
        let forcast = data.list;

        let one = [];

        for (let i = 7; i <= 42; i = i + 8) {
          one.push(forcast[i]);
        }

        forcast && setInfo(one);
      });
  }, []);

  const display =
    info &&
    info.map((x, i) => {
      let date = x.dt_txt.split(" ");
      let date2 = date[0].split("-");

      return (
        <div className="day">
          <div className="date">{`${date2[2]}-${date2[1]}`}</div>
          <div className="icon1">
            <img
              src={`http://openweathermap.org/img/wn/${x.weather[0].icon}.png`}
            />
          </div>
          <div className="descr">{x.weather[0].description}</div>
          <div className="maxTemp">
            {Math.round(x.main.temp_max - 273.15) + "C"}
          </div>
          <div className="minTemp">
            {Math.round(x.main.temp_min - 273.15) + "C"}
          </div>
        </div>
      );
    });

  return <div id="fiveDay">{info && display}</div>;
};

export default FiveDays;
