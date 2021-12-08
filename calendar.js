
// const weekday = ["Måndag","Tisdag","Onsdag","Torsdag","Fredag","Lördag","Söndag"];

window.onload = ('load', main);

function main() {
    getCalendar();
}

async function getCalendar() {
    fetch('http://sholiday.faboul.se/dagar/v2.1/2015')
    .then(res => res.json())
    .then(data => console.log(data));
}