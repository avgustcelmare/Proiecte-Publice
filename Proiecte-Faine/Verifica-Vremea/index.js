const apikey = "b671b86ed2d63a7d50d796cfac4eeb69";

const weatherDataEl = document.getElementById("weather-data");

const cityInputEl = document.getElementById("city-input");

const oraseTraducere = {
  "Bucuresti": "Bucharest",
};

const orasTradus = oraseTraducere[cityInputEl];

const formEl = document.querySelector("form");

formEl.addEventListener("submit", async (event) => {
  event.preventDefault();
  const cityValue = oraseTraducere[cityInputEl.value] || cityInputEl.value;
  getWeatherData(cityValue);  
});

async function getWeatherData (cityValue) {
  try {
    const response =  await fetch(`https://api.openweathermap.org/data/2.5//weather?q=${cityValue}&appid=${apikey}&units=metric&lang=ro`);

    if (!response.ok) {
      throw new Error("Network responce was not ok");
    }        

    const data = await response.json();

    const temperature = Math.round(data.main.temp)

    const description = data.weather[0].description;

    const icon = data.weather[0].icon;

    const details = [
      `Se simte ca: ${Math.round(data.main.feels_like)}°C`,
      `Umiditate: ${data.main.humidity}%`,
      `Viteza Vântului: ${Math.round(data.wind.speed)} m/sec`,
    ];
    
    weatherDataEl.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`;

    weatherDataEl.querySelector(".temperature").textContent = `${temperature}°C`;

    weatherDataEl.querySelector(".description").textContent = `${description}`;

    weatherDataEl.querySelector(".details").innerHTML = details.map(
      (detail) => `<div>${detail}</div>`
    ).join("");

  } catch (error) {
    weatherDataEl.querySelector(".icon").innerHTML = "";

    weatherDataEl.querySelector(".temperature").textContent = "";

    weatherDataEl.querySelector(".description").textContent = "S-a întâmpinat o problemă, încearcă din nou!";

    weatherDataEl.querySelector(".details").innerHTML = "";
  }
};