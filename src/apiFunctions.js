import { hideLoader } from "./index.js";
import { showLoader } from "./index.js";
import { ifErrorFound } from "./index.js";

const apiKey = '4LWKKC37PQN38RC3D64Q5NU3B'
export async function weatherData(location) {
    try {
        showLoader()
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`);
        const data = await response.json();

        hideLoader()
        return data;
    } catch (err) {
        ifErrorFound('City not found')
        console.log('error found');
        hideLoader();
    }
}


export async function getLocationAPI(lat, long) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${long}?key=${apiKey}`
    try {
        const response = await fetch(url)
        const data = await response.json();

        const dTimeZone = data.timezone
        const DtimeZOneEdit = dTimeZone.split('/')[1];

        const cityName = document.querySelector('.cityName');
        cityName.innerHTML = DtimeZOneEdit
        
        return data;
    } catch (err) {
        console.log('Permission not given')
        const info = document.getElementById('infoDown')
        info.innerHTML = ''
    }
}

