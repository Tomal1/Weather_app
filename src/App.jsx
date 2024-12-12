import React from "react";
import Nav from "./components/nav";
import Current from "./components/current";
import "./assets/style/app.css";
import { useState } from "react";
import { useEffect } from "react";
import "leaflet/dist/leaflet.css";

function App() {
  let [url, setUrl] = useState("");

  const backGround = (data) => {
    if (data === "01d") {
      setUrl("01d.jpg");
    } else if (data === "01n") {
      setUrl("01n.jpg");
    } else if (data === "02d") {
      setUrl("02d.jpeg");
    } else if (data === "02n") {
      setUrl("02n.jpeg");
    } else if (data === "03d" || data === "03n") {
      setUrl("03d:n.webp");
    } else if (data === "03d" || data === "03n") {
      setUrl("03d:n.webp");
    } else if (data === "04d" || data === "04n") {
      setUrl("04d:n.jpg");
    } else if (data === "09d" || data === "09n") {
      setUrl("09d:n.jpg");
    } else if (data === "10d") {
      setUrl("10d.jpg");
    } else if (data === "10n") {
      setUrl("10n.jpg");
    } else if (data === "11d" || data === "11n") {
      setUrl("11d:n.jpg");
    } else if (data === "13d" || data === "13n") {
      setUrl("13d:n.jpeg");
    } else if (data === "50d" || data === "50n") {
      setUrl("50d:n.jpg");
    }
    return url;
  };

  useEffect(() => {
    backGround();
  }, []);

  console.log(url);
  return (
    <div id="poster" style={{ backgroundImage: `url(${url})` }}>
      <Nav />
      <Current image={backGround} />
    </div>
  );
}

export default App;
