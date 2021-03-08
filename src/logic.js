
// Create an array of objects to store alarm data. Note that
// an example alarm object is included in the array so that an initial alarm is shown
// (for illustrative purposes only)
let allAlarms = [
    {
    "hours": "12",
    "minutes": "45",
    "period": "pm",
    "active": false,
    },
    {
    "hours": "7",
    "minutes": "15",
    "period": "pm",
    "active": false,
    }
];

function createAlarm(hours, minutes, period) {
    allAlarms.push({
        hours,
        minutes,
        period,
        active: true,
    })
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



export { allAlarms, createAlarm, checkTimePeriod } 