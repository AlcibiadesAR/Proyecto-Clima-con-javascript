const URL_BASE = `https://api.openweathermap.org/data/2.5/weather`;
const API_KEY = "TU API KEY";
const DIFF_KELVIN = 273.15;

document.getElementById("btnSearch").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value;
  if (city) {
    weatherApi(city);
  } else {
    alert("Ingrese una ciudad válida");
  }
});

const weatherApi = (city) => {
  fetch(`${URL_BASE}?q=${city}&appid=${API_KEY}&lang=es`)
    .then((data) => data.json())
    .then((data) => weatherData(data));
};

const weatherData = (data) => {
  const divResponseData = document.getElementById("response");
  divResponseData.innerHTML = "";

  const cityName = data.name;
  const countryName = data.sys.country;
  const temp = data.main.temp;
  const humidity = data.main.humidity;
  const description = data.weather[0].description;
  const icon = data.weather[0].icon;

  const cityInfo = document.createElement("h2");
  cityInfo.textContent = `${cityName}, ${countryName}`;

  const tempInfo = document.createElement("p");
  tempInfo.textContent = `La temperatura es: ${Math.floor(
    temp - DIFF_KELVIN
  )}ºC`;

  const humidityInfo = document.createElement("p");
  humidityInfo.textContent = `La humedad es del ${humidity}%`;

  const iconInfo = document.createElement("img");
  iconInfo.src =  `https://openweathermap.org/img/wn/${icon}@2x.png`;

  const descriptionInfo = document.createElement('p');
  descriptionInfo.textContent = `La descripción meteorológica es: ${description}`

  divResponseData.appendChild(cityInfo);
  divResponseData.appendChild(tempInfo);
  divResponseData.appendChild(humidityInfo);
  divResponseData.appendChild(iconInfo);
  divResponseData.appendChild(descriptionInfo);
  
};
