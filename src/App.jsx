import React from "react";
import Nav from "./components/nav";
import Current from "./components/current";
import "./assets/style/app.css";
import { useState } from "react";
import { useEffect } from "react";
import "leaflet/dist/leaflet.css";

function App() {
  let [filename, setFilename] = useState("");

  const backGround = (data) => {
    console.log(data)

    if (data === "01d") {
      setFilename("01d.jpg");
    } else if (data === "01n") {
      setFilename("01n.jpg");
    } else if (data === "02d") {
      setFilename("02d.jpg");
    } else if (data === "02n") {
      setFilename("02n.jpg");
    } else if (data === "03d" || data === "03n") {
      setFilename("03d_n.jpg");
    } else if (data === "03d" || data === "03n") {
      setFilename("03d_n.jpg");
    } else if (data === "04d" || data === "04n") {
      setFilename("04d_n.jpg");
    } else if (data === "09d" || data === "09n") {
      setFilename("09d_n.jpg");
    } else if (data === "10d") {
      setFilename("10d.jpg");
    } else if (data === "10n") {
      setFilename("10n.jpg");
    } else if (data === "11d" || data === "11n") {
      setFilename("11d_n.jpg");
    } else if (data === "13d" || data === "13n") {
      setFilename("13d_n.jpg");
    } else if (data === "50d" || data === "50n") {
      setFilename("50d_n.jpg");
    }
     filename;
  };

  useEffect(() => {
    backGround();
  }, []);

  console.log(filename);
  return (
    <div id="poster" style={{ backgroundImage: `url(${filename})` }}>
      <Nav />
      <Current image={backGround} />
    </div>
  );
}

export default App;
