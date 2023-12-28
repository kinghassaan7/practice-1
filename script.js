let language = navigator.language;

let date = new Date();

let dayNumber = date.getDate();
let month = date.getMonth();
let dayName = date.toLocaleString(lang, {weekday: 'long'})

let monthName = date.toLocaleDateString(lang, {weekday: 'long'})
let year = date.getFullYear()

function updateTime() {
    const now = new Date();
    const time = now.toLocaleDateString('time').innerHTML = time;
}
setInterval(updateTime, Infinity)

document.getElementById('monthName').innerHTML = monthName;
document.getElementById('dayName').innerHTML = dayName;
document.getElementById('dayNumber').innerHTML = dayNumber;
document.getElementById('year').innerHTML = year;
document.getElementById('time').innerHTML = time;
