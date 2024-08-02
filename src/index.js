

async function getWeatherDataCords(cityName){
    const apiKey = 'f4ae45b1c26935df13ce747949bf5871'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`

    try{
    const response = await fetch(url)
    const data = await response.json()
    return data
    }
    catch(err){
        console.log('errou found')
    }
   
}

async function weatherDataTwo(location){
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=4LWKKC37PQN38RC3D64Q5NU3B`)
    const data = await response.json()
    return data
}

async function displayWeatherData(location){

const weatherData = await getWeatherDataCords(location)

const weatherTwo = await weatherDataTwo(location)
console.log(weatherTwo)
console.log(weatherData)

const maxTemp = weatherData.main.temp_max
const minTemp = weatherData.main.temp_min
const feelsLike = weatherData.main.feels_like
const humidity = weatherData.main.humidity
const pressure = weatherData.main.pressure

const windSpeed = weatherData.wind.speed


const temprature = weatherTwo.currentConditions.temp

const address = weatherTwo.resolvedAddress
const condition = weatherTwo.currentConditions.conditions
const date = '';
const snow = weatherTwo.currentConditions.snow
const timeZone = weatherTwo.timezone
const description = weatherTwo.description

console.log(description)

const tempCel = function fahrenheitToCelsius(fahrenheit){
    return (fahrenheit - 32) * 5 / 9;
  }



}
displayWeatherData('Istanbul')
