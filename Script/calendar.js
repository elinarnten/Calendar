const date = new Date();
let holidays = [];
window.onload = ('load', main);

function main() {
    renderSelectedMonth();
    getHolidays();
    addEventListener();
}

function addEventListener() {
    document.getElementById('prev-button').addEventListener('click', prevMonth);
    document.getElementById('next-button').addEventListener('click', nextMonth);
}

function renderSelectedMonth() {
    const dateContainer = document.getElementById('date-container');
    resetCalendar();
    uppdateMonthName(date);
    syncDatesAndWeekdays(date, dateContainer);
    renderCalendar(date, dateContainer);
}

/* async function getHolidays() {
    fetch('http://sholiday.faboul.se/dagar/v2.1/2015/01')
    .then(res => res.json())
    .then(data => console.log(data));
} */
async function getHolidays() { 
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const response = await fetch(`https://sholiday.faboul.se/dagar/v2.1/${year}/${month}`);
    const data = await response.json();
    
    holidays = data.dagar.filter((day) => day.helgdag);
    renderSelectedMonth();
} 
  
function syncDatesAndWeekdays (date, dateContainer) {
    const weekdays = new Date(date.getFullYear(), date.getMonth(), 0).getDay();
    for (let i = 0; i < weekdays; i++) {
        let prevDaysContainers = document.createElement('div');
        dateContainer.appendChild(prevDaysContainers);
    }
}

function renderCalendar(date, dateContainer) {
    const daysOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const month = (date.getMonth() + 1);
    const year = (date.getFullYear());
    /* const day = (date.getDate()); */
    for (let i = 1; i <= daysOfMonth; i++) {
        const dayContainer = document.createElement('div');
        dayContainer.setAttribute("id", "day-container");
        dayContainer.innerText = i;
        const searchDate = (year + "-" + String(month).padStart(2, '0') + "-" + (String(i).padStart(2, '0')));
        dayContainer.setAttribute("data-date", searchDate)
        dateContainer.appendChild(dayContainer);
        
        if (date.getFullYear() === new Date().getFullYear() &&
            date.getMonth() === new Date().getMonth() &&
            date.getDate() === i) {
            dayContainer.style.backgroundColor = '#7978a0';
            dayContainer.style.borderRadius = '0.5rem';
            dayContainer.style.color = 'white';
        }
        
        const todosForCurrentDay = [];
        let numberOfItemsPerDay = document.createElement("div");
        numberOfItemsPerDay.setAttribute("id", "items-day");
        tasklist.filter((item) => {
            if (item.taskDate === searchDate) {
            dayContainer.appendChild(numberOfItemsPerDay);
            todosForCurrentDay.push(item);
            numberOfItemsPerDay.innerText = todosForCurrentDay.length;
            dayContainer.onclick = () => showInTodoList(todosForCurrentDay);  
          }   
        }); 
          //console.log(todosForCurrentDay)

          let holidayPerMonth = document.createElement("p");
          holidayPerMonth.setAttribute("id", "holiday");
          holidays.filter((day) => {
          if (day.datum === searchDate){
              dayContainer.appendChild(holidayPerMonth)
              holidays.push(day);
              holidayPerMonth.innerHTML = day.helgdag;
        }
    })
    }  
}

function showInTodoList(todosForCurrentDay) {
    todosForCurrentDay.filter((item) => {
      if (todosForCurrentDay.length > 0) {
        renderList(todosForCurrentDay);
      }
    });
  }

function resetCalendar() {
    document.getElementById('date-container').innerHTML = '';
}

function prevMonth() {
    date.setMonth(date.getMonth() - 1);
    renderSelectedMonth();
    getHolidays();
}

function nextMonth(){
    date.setMonth(date.getMonth() + 1);
    renderSelectedMonth();
    getHolidays();
}

function uppdateMonthName(date) {
    const months = ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'];
    const monthName = months[date.getMonth()] +" "+ date.getFullYear();
    document.getElementById('current-month').innerText = monthName;
}