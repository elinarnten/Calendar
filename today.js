window.addEventListener('load', main);

function main(){
    getCurrentDayInfo();
}

function getCurrentDayInfo() {
    renderTime();
    setInterval(renderTime, 1000);
}

function renderTime() {
    const date = new Date();

    const timeElement = document.getElementById('time');
    timeElement.innerText = getCurrentTimeString(date);

    const weekdayElement = document.getElementById('day');
    weekdayElement.innerText = getCurrentWeekday(date);

    const dateElement = document.getElementById('date');
    dateElement.innerText = getCurrentDateString(date);
}

function getCurrentTimeString(date) {
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();

    if (seconds <10) seconds = '0' + seconds;
    if (minutes <10) minutes = '0' + minutes;
    if (hours <10) hours = '0' + hours;

    return hours + ":" + minutes + ":" + seconds;
}

function getCurrentWeekday(date) {
    const weekday = date.getDay();

    switch (weekday) {
        case 0: return 'Söndag';
        case 1: return 'Måndag';
        case 2: return 'Tisdag';
        case 3: return 'Onsdag';
        case 4: return 'Torsdag';
        case 5: return 'Fredag';
        case 6: return 'Lördag';
    }
}

function getCurrentDateString(date) {

    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yyyy = date.getFullYear();

    if (dd <10) dd = '0' + dd;
    if (mm <10) mm = '0' + mm;
    
    /* 
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0');
    let yyyy = date.getFullYear(); */

    return yyyy + "-" + mm + "-" + dd;

}

