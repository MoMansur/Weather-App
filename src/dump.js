//4LWKKC37PQN38RC3D64Q5NU3B

const weatherCard = document.querySelector('.weatherCard');
const addressDom = document.querySelector('.weatherCard .address');
const timeDom = document.querySelector('.weatherCard .time');
const dateDom = document.querySelector('.weatherCard .date');
const tempImg = document.querySelector('.weatherCard #tempImg');
const tempDom = document.querySelector('.weatherCard .temp');

const daysTempContainer = document.getElementById('daysTemp')


async function getWeather(location){
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=4LWKKC37PQN38RC3D64Q5NU3B`)
    const data = await response.json()
    console.log(data)

    const condition = data.currentConditions.conditions
    const address = data.address
    const date = '';
    const temprature = data.currentConditions.temp
    const feelsLike = data.currentConditions.icon
    const humidity = data.currentConditions.humidity
    const snow = data.currentConditions.snow
    const timeZone = data.timezone
   
    const tempCel = function fahrenheitToCelsius(fahrenheit){
        return (fahrenheit - 32) * 5 / 9;
      }
console.log(tempCel(temprature))

    addressDom.innerHTML = address
    tempDom.innerHTML = temprature
    


    const pastDaysData = data.days
    pastDaysData.map(day =>{
    
    // Create the outer div element
    const dayDiv = document.createElement('div');
    dayDiv.className = 'day';

    // Create the paragraph element for the day name
    const dayName = document.createElement('p');
    dayName.textContent = 'Sunday';

    // Create the heading element for the temperature
    const temperature = document.createElement('h4');
    temperature.textContent = `${day.temp} C`;

    // Create the image element
    const weatherIcon = document.createElement('img');
    weatherIcon.src = '../src/img/svg/rainy.svg';
    weatherIcon.alt = '';

    // Append the elements to the day div
    dayDiv.appendChild(dayName);
    dayDiv.appendChild(temperature);
    dayDiv.appendChild(weatherIcon);

    // Optionally, append the day div to a parent element in the DOM
    daysTempContainer.append(dayDiv);

        
        console.log(day)
     
    })
}

const form = document.getElementById('form')
const searchInput = document.getElementById('searchInput')
form.addEventListener('submit', (e)=>{
    e.preventDefault()

    const search = searchInput.value
    console.log(search)
    getWeather(search)
})

getWeather('Lagos')