//instantiate MDC components
const ripple = new mdc.ripple.MDCRipple(document.querySelector('.mdc-button'));

const clock = setInterval(() => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let time = `${hours}:${minutes}:${seconds}`;
    document.querySelector('.time').innerHTML = time;
}, 1000);
