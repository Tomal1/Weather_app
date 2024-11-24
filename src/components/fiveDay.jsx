
  // useEffect(()=>{
  //   currentLoc &&
  //   fetch(
  //     `https://api.openweathermap.org/data/2.5/forecast?q=${currentLoc}&appid=1c2664e16cd9dca0ca2c91a78a16c059`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data)
  //       data && setInfo(data)
  //       console.log("location name", data.city.name )
  //       console.log("forcast until",((data.list[0].dt % 86400) / 86400) * 24 +":00")
  //       console.log("Current temp",(Math.round(data.list[0].main.temp-273.15))+" C")
  //       console.log("max",(Math.round(data.list[0].main.temp_max-273.15))+" C")
  //       console.log("min",(Math.round(data.list[0].main.temp_min-273.15))+" C")
  //       console.log("discription:",data.list[0].weather[0].description)
  //       console.log("icon",data.list[0].weather[0].icon)
  //       console.log("wind-speed:",data.list[0].wind.speed +" mph")
  //     });

  // },[])

  let [info, setInfo] = useState(null);