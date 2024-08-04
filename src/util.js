


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

