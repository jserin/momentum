const API_KEY = "b99d68fe5470e318b4f5e2d65f4d1215";
function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather div:first-child");
            const city = document.querySelector("#weather div:last-child");

            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
            city.innerText = data.name;
    });
}
function onGeoErr() {
    alert("Can't find you. No weather.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);