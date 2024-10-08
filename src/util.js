
export function getWeatherIcon(condition) {
    if (condition.includes('Rain') || condition.includes('cloudy')) {
        return 'rainy.svg'; 
    } else if (condition.includes('Rain')) {
        return 'rainy.svg'; // Example icon filename
    } else if (condition.includes('cloudy')) {
        return 'cloudy.svg';
    } else if (condition.includes('Clear')) {
        return 'sun.svg'; 
    } else if (condition.includes('Snow')) {
        return 'snow.svg'; 
    } else if (condition.includes('Fog')) {
        return 'mist.svg'; 
    } else {
        return 'rainy.svg'; 
    }
}

export function getDayOfWeek(dateString) {
    const date = new Date(dateString);
            const daysOfWeek = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 
        'Thursday', 'Friday', 'Saturday'
    ];
            const dayIndex = date.getDay();
    
    // Return the day name
    return daysOfWeek[dayIndex];
}


export function convertTo12HourFormat(time) {
    const [hours, minutes, seconds] = time.split(':');
    let period = 'AM';
    let hour = parseInt(hours, 10);

    if (hour >= 12) {
        period = 'PM';
        if (hour > 12) {
            hour -= 12;
        }
    } else if (hour === 0) {
        hour = 12;
    }

    const formattedTime = `${hour}:${minutes}:${seconds} ${period}`;
    
    if (period === 'AM') {
        // Condition for AM
        console.log("This is in the AM period:", formattedTime);
        const style = document.createElement('style');
        style.innerHTML = `
        body {
        background: rgb(27,48,50);
        background: linear-gradient(0deg, rgba(27,48,50,1) 0%, rgba(42,105,150,1) 100%); 
        min-height: 100vh;
        padding: 10px;
        }
    `;
    } else {
        // Condition for PM
        console.log("This is in the PM period:", formattedTime);
        
        const style = document.createElement('style');
        style.innerHTML = `
        body {
        background: rgb(27,48,50);
        background: linear-gradient(0deg, rgba(27,48,50,1) 0%, rgba(42,105,150,1) 100%); 
        min-height: 100vh;
        padding: 10px;
        }`

    }

    return formattedTime;
}


export function theme(){
    const themeIcon = document.getElementById('themeIcon')
    const footer = document.getElementsByTagName('footer')

   let  isClicked = true
    themeIcon.addEventListener('click', ()=>{
        if(isClicked){
            document.body.style.background ='rgb(27,48,50)'
            document.body.style.background= 'linear-gradient(0deg, rgba(27,48,50,1) 0%, rgba(42,105,150,1) 100%)'
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        }else{
            themeIcon.classList.replace('fa-sun', 'fa-moon');
            document.body.style.background = 'rgb(45,234,253)'
            document.body.style.background = 'linear-gradient(0deg, rgba(45,234,253,1) 0%, rgba(34,127,195,1) 100%)'
        }
        isClicked = !isClicked
    })
}