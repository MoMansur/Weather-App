// Selecting elements and storing in variables
import { convertTo12HourFormat } from "./util.js";
import { weatherData } from "./apiFunctions.js";
// Form elements
const formElement = document.getElementById('form');
const locationIcon = document.querySelector('.locationIcon');
const searchInput = document.querySelector('.searchIn');
const submitButton = document.querySelector('.submitBtn');

// Main data elements
const cityName = document.querySelector('.cityName');
const dateElement = document.querySelector('.date');
const tempRow = document.getElementById('tempRow');
const tempIcon = tempRow.querySelector('.tempIcon');
const temperatureDom = tempRow.querySelector('.temp');
const switchButton = tempRow.querySelector('.switchBtn');

// Other data elements
const otherData = document.querySelector('.otherData ul');
const feelsLikeDom = otherData.children[0].querySelector('strong');
const humidityDom = otherData.children[1].querySelector('strong');
const windSpeedDom = otherData.children[2].querySelector('strong');

const descritptionText = document.getElementById('descritptionText');

// Sun status elements
const sunriseDom = document.querySelector('.sunrise');
const sunsetDom = document.querySelector('.sunset');

// Other days elements
const otherDays = document.querySelector('.otherDays');
const days = otherDays.querySelectorAll('.day');
const dayElement = document.querySelector('.day');
const dayNameElement = dayElement.querySelector('h6');
const dayIconElement = dayElement.querySelector('img');
const dayTempElement = dayElement.querySelector('.dayTemp');


// Info elements
const fullAddress = document.querySelector('.fullAddress');
const timeZoneDom = document.querySelector('.TimeZone');

const loaderDom = document.getElementById('loader')




async function displayWeatherData(location) {
    const data = await weatherData(location);

    const weatherArr = data.days[0]
    const otherDaysArr = data.days

    for
    console.log(weatherArr)

    function displayer(array){
        const feelsLike = Math.floor(array.feelslike);
        const humidity =  array.windspeed;
        const windSpeed = array.humidity;
        const temprature = Math.floor(array.temp);

        const address = array.resolvedAddress;
        const condition = array.conditions;
        const time = array.datetime
        const date = '';
        const snow = array.snow;
        const timeZone = data.timezone;
        const description = data.description;
        const sunrise = array.sunrise;
        const sunset = array.sunset;

        // const pastDaysData = a.days

        const tempCel = function fahrenheitToCelsius(fahrenheit) {
            let answer = (fahrenheit - 32) * 5 / 9;
            return Math.floor(answer);
        };

          //APENDERING
        cityName.innerHTML = data.address;
        temperatureDom.innerHTML = temprature;
        descritptionText.innerHTML = condition;
        timeZoneDom.innerHTML = convertTo12HourFormat(time)
        sunriseDom.innerHTML = sunrise;
        sunsetDom.innerHTML = sunset;
        fullAddress.innerHTML = timeZone;


        humidityDom.innerHTML = `${humidity}%`;
        feelsLikeDom.innerHTML = `${feelsLike}°`;
        windSpeedDom.innerHTML = `${windSpeed} km/h`;

    
     // DATE
     const todaysDate = new Date();
     const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
     const formattedDate = todaysDate.toLocaleDateString('en-US', options);
     dateElement.innerHTML = formattedDate;
 
 
     function celcuisFunction() {
         const convertion = tempCel(temprature);
         temperatureDom.innerHTML = convertion;
         feelsLikeDom.innerHTML = `${tempCel(feelsLike)}°`;
     }
 
 
     let isClicked = true;
     switchButton.addEventListener('click', () => {
         if (isClicked) {
             celcuisFunction();
             switchButton.innerHTML = '°F';
         } else {
             temperatureDom.innerHTML = temprature;
             feelsLikeDom.innerHTML = `${feelsLike}°`;
 
         }
         isClicked = !isClicked;
     });
    }
    
    displayer(weatherArr)

   
   

  
   
}

const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const search = searchInput.value;
    console.log(search);
    displayWeatherData(search);
});

displayWeatherData('Istanbul');


export function showLoader() {
    // mainDataDom.innerHTML = "";
    loaderDom.style.display = 'block';
}

// // Function to hide the loader
export function hideLoader() {
    loaderDom.style.display = 'none';
}
