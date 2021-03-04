
// Create an array of objects to store alarm data. Note that
// an example alarm object is included in the array so that an initial alarm is shown
// (for illustrative purposes only)
let allAlarms = [{
    "hours": "8",
    "minutes": "35",
    "period": "am",
}];

function createAlarm(hours, minutes, period) {
    allAlarms.push({
        hours,
        minutes,
        period,
        active: true,
    })
}


// Function to update alarm object/array with new time


// 



export { allAlarms } 