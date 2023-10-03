let apiKey = "57821c3b75b60c68ecd1a8d0dd1aa8d3";

function showCity(event) {
  let city = document.querySelector("#city-input").value;
  event.preventDefault();
  h2.innerHTML = city;
  function fetchWeather(response) {
    let temperature = Math.round(response.data.main.temp);
    console.log(temperature);
    console.log(response);
    let city = response.data.name;
    let message = `It is ${temperature}°F in ${city}`;
    let temp = document.querySelector("#temp");
    temp.innerHTML = message;
  }
  let weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios
    .get(weatherApi)
    .then(fetchWeather)
    .catch((error) => {
      console.error("Error fetching weather data:", error);

      alert("Failed to fetch weather data. Please try again later.");
    });
}
let city = document.querySelector("#city-input").value;

let form = document.querySelector("#city-search");

let h2 = document.querySelector("h2");
form.addEventListener("submit", showCity);

let now = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Thursday", "Friday", "Saturday"];
let month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let currentMonth = month[now.getMonth()];
let currentDay = days[now.getDay()];
let currentDate = now.getDate();
let currentTime = `${now.getHours()}:${now.getMinutes()}`;

let weekDay = document.querySelector("#day-of-week");
weekDay.innerHTML = `${currentDay}`;
let timeStamp = document.querySelector("#date-and-time");
timeStamp.innerHTML = `${currentMonth}, ${currentDate} ${currentTime}`;
