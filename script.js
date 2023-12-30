const inputBox = document.querySelector(".input_box");
const btn = document.querySelector(".btn");
const currcity = document.querySelector(".city");
const humid = document.querySelector(".humid");
const wind = document.querySelector(".wind");
const rain = document.querySelector(".rain");
const weatherImg = document.querySelector(".weather-img");
const weatherType = document.querySelector(".weather-type");
const temperature = document.querySelector(".temperature");

// function check() {
//   if (inputBox.value == "") {
//     alert("Please enter the City!");
//     return;
//   } 
// }

async function getWether(city) {
    
  const Api_Key = "9c5c2063a22b2bb4373d1fd19da907fd";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}`;
  

  const weatherData = await fetch(`${url}`).then((response) => response.json())
  console.log(weatherData);

  if (inputBox.value == "") {
    alert("Please enter the City!");
    return;
  } else{
      currcity.innerHTML = `${weatherData.name}`;
  }

  
  temperature.innerHTML = `${Math.round(weatherData.main.temp - 273.15)}°C`;
  humid.innerHTML = `${weatherData.main.humidity}%`;
  wind.innerHTML = `${weatherData.wind.speed} Km/h`;
  // rain.innerHTML = `${weatherData.rain}% `;
  weatherType.innerHTML =  `${weatherData.weather[0].main}`;

  switch(weatherData.weather[0].main){
    case 'Clouds':
        weatherImg.src = 'asset/cloudy1.png'
        break;
    case 'rain':
        weatherImg.src = 'asset/raining.png'
        break;
    case 'Sunny':
        weatherImg.src = 'asset/sun.png'
        break;
    case 'Fog':
        weatherImg.src = 'asset/fog1.png'
        break;
    case 'Mist':
        weatherImg.src = 'asset/fog1.png'
        break;
    case 'Haze':
        weatherImg.src = 'asset/fog1.png'
        break;
  }


}


btn.addEventListener("click", () => {
  getWether(inputBox.value);
});

inputBox.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    getWether(inputBox.value);
  }
});
