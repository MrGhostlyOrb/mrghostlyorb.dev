//instantiate MDC components
const ripple = new mdc.ripple.MDCRipple(document.querySelector('.mdc-button'));


const timer = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    document.querySelector('.time').innerHTML = `${hours}:${minutes}:${seconds}`;

    // If there is a 7 in any position the border of the clock will change to red
    if (hours.toString().includes('7') || minutes.toString().includes('7') || seconds.toString().includes('7')) {
        document.querySelector('.time').style.border = '2px solid red';
        document.querySelector('.eye').style.display = 'block';
        document.querySelector('.eye').style.animation = 'blink 2s infinite';
    }
    else {
        document.querySelector('.time').style.border = '2px solid black';
        document.querySelector('.eye').style.animation = 'none';
        document.querySelector('.eye').style.display = 'none';
    }
}
timer();
const clock = setInterval(timer, 1000);

const dater = () => {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    if (day < 10) {
        day = "0" + day;
    }
    if (month < 10) {
        month = "0" + month;
    }
    document.querySelector('.date').innerHTML = `${day}/${month}/${year}`;
}
dater();
const date = setInterval(dater, 1000);
