window.addEventListener('load', main);

function main(){
    getCurrentDayInfo();
}

function getCurrentDayInfo() {
    renderTime();
    setInterval(renderTime, 1000);
}

/**
 * Uppdates page with current time, day and date.
 */
function renderTime() {
    const date = new Date();

    const timeElement = document.getElementById('time');
    timeElement.innerText = getCurrentTimeString(date);

    const weekdayElement = document.getElementById('day');
    weekdayElement.innerText = getCurrentWeekday(date);

    const dateElement = document.getElementById('date');
    dateElement.innerText = getCurrentDateString(date);
}

/**
 * Gets time from date.
 * @param {Date} date 
 * @returns {String} current time in hours, minutes and seconds.
 */
function getCurrentTimeString(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();

    if (minutes <10) minutes = '0' + minutes;
    if (hours <10) hours = '0' + hours;

    return hours + ":" + minutes;
}

/**
 * Gets day name from date.
 * @param {Date} date 
 * @returns {String} current weekday in swedish.
 */
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

/**
 * Gets the current date.
 * @param {Date} date 
 * @returns {String} in order year, month, day.
 */
function getCurrentDateString(date) {

    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yyyy = date.getFullYear();

    if (dd <10) dd = '0' + dd;
    if (mm <10) mm = '0' + mm;
    
    return yyyy + "-" + mm + "-" + dd;
}

