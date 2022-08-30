const API_KEY = "2dcbab6d0c9c469c6e2452efeb28948d";
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
  console.log(url);
  fetch(url).then((res) =>
    res.json().then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} /${data.main.temp}`;
    })
  );
}
function onGeoError() {
  alert("Can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
