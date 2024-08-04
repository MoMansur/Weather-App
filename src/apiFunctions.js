import { hideLoader } from "./index.js";
import { showLoader } from "./index.js";

export async function weatherData(location) {
    try {
        showLoader()
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=4LWKKC37PQN38RC3D64Q5NU3B`);
        const data = await response.json();

        hideLoader()
        return data;
    } catch (err) {
        console.log('error found');
        hideLoader();
    }
}
