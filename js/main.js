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
}
timer();
const clock = setInterval(timer, 1000);
