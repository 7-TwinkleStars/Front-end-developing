const hourHand = document.querySelector('.hand.hour');
const minuteHand = document.querySelector('.hand.minute');
const secondHand = document.querySelector('.hand.second');
const hourDisplay = document.getElementById('hour');
const minuteDisplay = document.getElementById('minute');
const secondDisplay = document.getElementById('second');

function setClock() {
    const now = new Date();
    
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) - 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    
    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 270;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    
    // Update digital display
    let hourValue = hours % 12;
    hourValue = hourValue ? hourValue : 12; // Adjust for 12-hour clock

    hourDisplay.textContent = String(hourValue).padStart(2, '0');
    minuteDisplay.textContent = String(minutes).padStart(2, '0');
    secondDisplay.textContent = String(seconds).padStart(2, '0');
    
    // Update color of digital display
    document.querySelector('.blue').style.backgroundColor = `hsl(${seconds * 6}, 70%, 50%)`;
    document.querySelector('.green').style.backgroundColor = `hsl(${minutes * 6}, 70%, 50%)`;
    document.querySelector('.yellow').style.backgroundColor = `hsl(${hourValue * 30}, 70%, 50%)`;
}

setInterval(setClock, 1000);
setClock();
