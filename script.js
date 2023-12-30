const inputBox = document.querySelector(".input_box");
const btn = document.querySelector(".btn");
const city = document.querySelector(".city");
const humid = document.querySelector(".humid");
const wind = document.querySelector(".wind");
const temperature = document.querySelector(".temperature");



function changeValue() {
  if (inputBox.value == "") {
    alert("Please enter the City!");
    return;
  } else {
    city.innerHTML = inputBox.value;
    console.log("clicked");
  }
}



async function getWether(city) {
    const Api_Key = "9c5c2063a22b2bb4373d1fd19da907fd";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}`;

    const weatherData = await fetch(`${url}`).then(response => response.json());
    console.log(weatherData);
    temperature.innerHTML =`${Math.round(weatherData.main.temp - 273.15)}°C`;
    humid.innerHTML =`${weatherData.main.humidity}%`;
    wind.innerHTML =`${weatherData.wind.speed} Km/h`;
  }

  
  


  btn.addEventListener("click", () => {
    changeValue();
    getWether(inputBox.value)
  });
  inputBox.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      console.log("pressed");
      changeValue();
      getWether(inputBox.value)
    }
  });