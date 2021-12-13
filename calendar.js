
// const weekday = ["Måndag","Tisdag","Onsdag","Torsdag","Fredag","Lördag","Söndag"];
const date = new Date();
window.onload = ('load', main);

function main() {
    renderSelectedMonth();
    getHolidays();
    addEventListener();
    /* markUpCurrentDay(date) */
}

function addEventListener() {
    document.getElementById('prev-button').addEventListener('click', prevMonth);
    document.getElementById('next-button').addEventListener('click', nextMonth);
}

function renderSelectedMonth() {
    const dateContainer = document.getElementById('date-container');
    resetCalendar();
    uppdateMonthName(date);
    //uppdateMonthDays(date);
    getCalendar(date, dateContainer);
}

async function getHolidays() {
    fetch('http://sholiday.faboul.se/dagar/v2.1/2015')
    .then(res => res.json())
    .then(data => console.log(data));
}

function getCalendar(date, dateContainer) {
    const daysOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const month = (date.getMonth() + 1);
    const year = (date.getFullYear());
    const day = (date.getDate());
    const today =(date.getDay())
    for (let i = 1; i <= daysOfMonth; i++) {
        const dayContainer = document.createElement('div');
        dayContainer.innerText = i;
        const searchDate = (year + "-" + String(month).padStart(2, '0') + "-" + (String(i).padStart(2, '0')));
        dayContainer.setAttribute("data-date", searchDate)
        dateContainer.appendChild(dayContainer);
        markUpCurrentDay(dayContainer);
        /* console.log(month, day);
        if (i === day) {
            dayContainer.style.backgroundColor = 'red';
        } */ 
    }
}


/* if (i === day) {
    dayContainer.style.backgroundColor = 'red';
}  */ 

/* new. date full ye<ar day month
for loop Ov
emtyp box create tom div */

/* function markUpCurrentDay(){
    const day = date.getDay();
    console.log(day)
    
    

    } */
    //document.getElementsByTagName('data-date').style.backgroundColor = 'red'; */
    
   /*  var sDate = nDate.getMonth()+1 + "_" + nDate.getDate();
    document.getElementById(sDate).style.backgroundColor = 'cyan'; */



function resetCalendar() {
    document.getElementById('date-container').innerHTML = '';
}

function prevMonth() {
    date.setMonth(date.getMonth() - 1);
    renderSelectedMonth();
}

function nextMonth(){
    date.setMonth(date.getMonth() + 1);
    renderSelectedMonth();
}

function uppdateMonthName(date) {
    const months = ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'];
    const monthName = months[date.getMonth()] +" "+ date.getFullYear();
    document.getElementById('current-month').innerText = monthName;
}

function markUpCurrentDay(dayContainer){
    const printDate = date.getDate();
    const today = date.getDay();
    if (printDate == today) {
    dayContainer.style.backgroundColor = 'red';
    }
}

const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
const firstDay = date.getDay();

const days = "";
for (let i = firstDay; i > 0; i--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
}

/* function uppdateMonthDays(date) {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const weekday = days[date.getDay()];
    document.getElementById('current-weekday').innerText = weekday;
    
} */


