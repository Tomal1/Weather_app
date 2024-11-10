const help = () => {

  const success = (position) => {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;

    let arg = "Dudley";

    // first fetch only gets current location name
    fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&limit=7&appid=1c2664e16cd9dca0ca2c91a78a16c059`)
    // fetch( `https://api.openweathermap.org/data/2.5/forecast?q=${arg}&appid=1c2664e16cd9dca0ca2c91a78a16c059`)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data[0].name);
        return data[0].name;
      });
  };

  const error = () => {
    alert("cant retrive location, please turn on your location");
  };

  navigator.geolocation.getCurrentPosition(success, error);
};

export default help;
