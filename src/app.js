function formatDate(timestamp) {
  let Date = newDate(timestamp);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let day = date.getDay();
  return '${day} ${hours}:${minutes}';
  return "monday 1:47";
}
function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.dt*1000);
let apikey = "a9acfb841e7c19f9624e7d8ba9d5fb29";
let apiurl =
  "https://api.openweathermap.org/data/2.5/weather?q=Bamenda&appid = ${apiKey}&units = metric";

axios.get(apiUrl).then(displayTemperature);
