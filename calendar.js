
// const weekday = ["Måndag","Tisdag","Onsdag","Torsdag","Fredag","Lördag","Söndag"];
window.onload = ('load', main);

function main() {
    getCalendar();
}

function getCalendar() {

    const calendar = document.getElementById('days');

    for (let day = 1; day < 32; day++) {
        calendar.insertAdjacentHTML('beforeend', `<div class = "day"> ${day} </div`);
    }
} 

const currentDay = new Date().getDate();
const currentYear = new Date().getFullYear();
const date = new Date();

const months = [
    "Januari",
    "Februari",
    "Mars",
    "April",
    "Maj",
    "Juni",
    "Juli",
    "Augusti",
    "September",
    "Oktober",
    "November",
    "December",
];
document.querySelector('.month h1').innerHTML = currentYear;
document.querySelector('.month h3').innerHTML = months[date.getMonth()];
document.querySelector('.month p').innerHTML = currentDay;








/*async function getCalendar() {
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const currentDay = new Date().getDay();
    
    const promises = [];

    for (let month = currentMonth; month > currentMonth -5; month-- ) {
        const promise = fetch(`http://sholiday.faboul.se/dagar/v2.1/${currentYear}/${currentMonth}/${currentDay}`);
        promises.push(promise);
    }
    const responses = await Promise.all(promises);
    console.log(responses);
    /*
    fetch(`http://sholiday.faboul.se/dagar/v2.1/${currentYear}/${currentMonth}/${currentDay}`)
    .then(res => res.json())
    .then(data => console.log(data));

}*/