
// Create an array of objects to store alarm data. Note that
// an example alarm object is included in the array so that an initial alarm is shown
// (for illustrative purposes only)
let allAlarms = [
    {
    "hours": "10",
    "minutes": "45",
    "period": "am",
    "active": false,
    },
];

function createAlarm(hours, minutes, period) {
    allAlarms.push({
        hours,
        minutes,
        period,
        active: true,
    })
}

function deleteAlarmObject(el) {
    let index = el.parentElement.parentElement.parentElement.dataset.value;
    allAlarms.splice(index, 1);
}



// Check whether AM or PM is selected 
function checkTimePeriod() {
    let am = document.querySelector('.am');
    let pm = document.querySelector('.pm');

    if (am.style.color == "white") {
        return "am"
    }

    if (pm.style.color == "white") {
        return "pm"
    }
}

// Function to update alarm object/array with new time


// 



export { allAlarms, createAlarm, checkTimePeriod, deleteAlarmObject } 