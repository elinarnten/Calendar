
// const weekday = ["Måndag","Tisdag","Onsdag","Torsdag","Fredag","Lördag","Söndag"];

window.onload = ('load', main);

function main() {
    getCalendar();
}

async function getCalendar() {
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
    .then(data => console.log(data));*/

}