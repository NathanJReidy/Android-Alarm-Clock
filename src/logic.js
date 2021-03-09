
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

// Change active string to false 
function activeFalse(el) {
    let index = el.parentElement.parentElement.parentElement.dataset.value;
    allAlarms[index].active = false;
}

// Change active string to true 
function activeTrue(el) {
    let index = el.parentElement.parentElement.parentElement.dataset.value;
    allAlarms[index].active = true;
}

function loadActiveAlarms() {
    allAlarms.forEach((alarm, index) => {
        if (alarm.active === true) {
            loadOnBtns(index);
        }
    })
}

function loadOnBtns(index) {
    let alarmCards = document.querySelectorAll('.alarmCard');
    let selectedAlarm = alarmCards[index];
    let selectedRoundSliderGray = selectedAlarm.children[0].children[1].children[0]; 

    // Mimick on button being clicked to trigger on event listener, which turns time text to blue, on button to blue and 'today' text to white
    selectedRoundSliderGray.click();
}



export { allAlarms, createAlarm, checkTimePeriod, deleteAlarmObject, activeFalse, activeTrue, loadActiveAlarms, loadOnBtns } 