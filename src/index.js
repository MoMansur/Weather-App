// Selecting elements and storing in variables
import { convertTo12HourFormat } from "./util.js";
import { weatherData } from "./apiFunctions.js";
import { getDayOfWeek } from "./util.js";
import { getWeatherIcon } from "./util.js";
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
// const days = otherDays.querySelectorAll('.day');
const dayElement = document.querySelector('.day');
// const dayNameElement = dayElement.querySelector('h6');
// const dayIconElement = dayElement.querySelector('img');
const dayTempElement = document.querySelectorAll('.dayTemp');


// Info elements
const fullAddress = document.querySelector('.fullAddress');
const timeZoneDom = document.querySelector('.TimeZone');

const loaderDom = document.getElementById('loader')


async function displayWeatherData(location) {
    const data = await weatherData(location);

    const weatherArr = data.days[0]
    const otherDaysArr = data.days

    console.log(weatherArr)

    function displayer(array){


        const feelsLike = Math.floor(array.feelslike);
        const humidity =  array.windspeed;
        const windSpeed = array.humidity;
        const temprature = Math.floor(array.temp);

        const address = array.resolvedAddress;
        const condition = array.conditions;
        const time = data.currentConditions.datetime
        console.log(data)
        const date = '';
        const snow = array.snow;
        const timeZone = data.resolvedAddress;
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
        temperatureDom.innerHTML = `${temprature}°F`;
        descritptionText.innerHTML = condition;
        timeZoneDom.innerHTML = time
        sunriseDom.innerHTML = sunrise;
        sunsetDom.innerHTML = sunset;
        fullAddress.innerHTML = timeZone;


        tempIcon.src = `../src/img/svg/${getWeatherIcon(data.currentConditions.icon)}`
        
        humidityDom.innerHTML = `${humidity}%`;
        feelsLikeDom.innerHTML = `${feelsLike}°`;
        windSpeedDom.innerHTML = `${windSpeed} km/h`;

    
     // DATE
     const todaysDate = new Date();
     const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
     const formattedDate = todaysDate.toLocaleDateString('en-US', options);
     dateElement.innerHTML = formattedDate;
 
 
     function celcuisFunction() {
         const convertion = `${tempCel(temprature)}°C`;
         temperatureDom.innerHTML = convertion;
         feelsLikeDom.innerHTML = `${tempCel(feelsLike)}°`;
     }
 
 
     function displayOtherDays(isCelsius) {
        // Clear existing content
        otherDays.innerHTML = '';
    
        for (let i = 1; i < 7; i++) {
            // Determine the temperature based on the unit
            const temp = isCelsius ? tempCel(otherDaysArr[i].temp) : Math.floor(otherDaysArr[i].temp);
            const tempUnit = isCelsius ? '°C' : '°F';
            
            otherDays.innerHTML += `
                <div class="day">
                    <h6>${getDayOfWeek(otherDaysArr[i].datetime)}</h6>
                    <img src="../src/img/svg/${getWeatherIcon(otherDaysArr[i].conditions)}" alt="">
                    <h5 class="dayTemp">${temp}${tempUnit}</h5>
                </div>`;
        }
    }


     function refresher(){
        otherDays.innerHTML = ""
        displayOtherDays(false)

     }
refresher()
    
       let isClicked = true;
       switchButton.addEventListener('click', () => {
           if (isClicked) {
               celcuisFunction();
               switchButton.innerHTML = '°F';
            otherDays.innerHTML =""
            displayOtherDays(true)
              
            
           } else {
              temperatureDom.innerHTML = `${temprature}°F`;
              feelsLikeDom.innerHTML = `${feelsLike}°`;
              switchButton.innerHTML = '°C';
              otherDays.innerHTML =""

              refresher()

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

displayWeatherData('Kenya');


export function showLoader() {
    // mainDataDom.innerHTML = "";
    loaderDom.style.display = 'block';
}
export function hideLoader() {
    loaderDom.style.display = 'none';
}



// Example usage

