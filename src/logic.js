import { loadActivatedAlarm } from './DOMload.js'
import { stopActivatedAlarm } from './eventListeners.js'
import { loadAlarms} from './DOMload.js'
import { updateTimeHour, updateTimeMinutes, updateTimePeriod } from './DOMchanges.js'

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
        } else if (alarm.active === false) {
            loadOffBtns(index);
        }
    })
}

function loadOnBtns(index) {
    let alarmCards = document.querySelectorAll('.alarmCard');
    let selectedAlarm = alarmCards[index];
    let selectedRoundSliderGray = selectedAlarm.children[0].children[1].children[0]; 

    // Mimick on button being clicked to trigger on btn event listener, which turns time text to blue, on button to blue and 'today' text to white
    selectedRoundSliderGray.click();
}

function loadOffBtns(index) {
    let alarmCards = document.querySelectorAll('.alarmCard');
    let selectedAlarm = alarmCards[index];
    let selectedRoundSliderBlue = selectedAlarm.children[0].children[2].children[0]; 

    // Mimick off button being clicked to trigger off btn event listener, which turns time text to gray, on button to gray and 'today' text to gray
    selectedRoundSliderBlue.click();
}




// When alarm time equals the current time, play the alarm sound
let sound = new Audio("https://onlineclock.net/audio/options/default.mp3");
sound.loop = true;

// Initial page load of alarm objects in array 
// document.addEventListener('DOMContentLoaded', loadAlarms());
loadAlarms();

function runAlarm() {
    setInterval(() => {
        let date = new Date();
        // Change hours from 24 hr time to 12 hr time
        let hours = (date.getHours() + 24) % 12 || 12;
        let minutes = date.getMinutes();
        // Choose correct time period (am or pm)
        let period = hours < 12 ? 'am' : 'pm';
        // Change single digit minutes to double digit minutes
        if (minutes < 10) {
            minutes = `0${minutes}`
        }
        
        let currentTime = `${hours}:${minutes}${period}`;
        console.log(`currentTime is ${currentTime}`);
    
        allAlarms.forEach((alarm, index) => {
            if (alarm.active === true) {
                let alarmTime = `${alarm.hours}:${alarm.minutes}${alarm.period}`;
                console.log(`alarmTime is ${alarmTime}`);
                if (alarmTime == currentTime) {
                    // Play alarm sound
                    sound.play();
                    // Load activated alarm card
                    loadActivatedAlarm(alarm);
                    console.log("Alarm went off!");
    
                    // Turn off alarm when dismiss button is clicked
                    stopActivatedAlarm();
    
                    // Turn alarm off by setting active to false in object
                    alarm.active = false;
    
                    // Turn alarm card off by re-loading the DOM so that the alarm btn, text etc turn gray again (i.e. shows the alarm is off)
                    loadActiveAlarms();
    
                }
            }
        })
    
    },1000);
}

// Run the Alarm
runAlarm();


// Update alarm object
function updateAlarmObject(index, updatedHour, updatedMinutes, updatedPeriod) {
    allAlarms[index].hours = updatedHour;
    allAlarms[index].minutes = updatedMinutes;
    allAlarms[index].period = updatedPeriod;

    console.log(allAlarms[index].minutes);
    console.log("updateAlarmObject runs!");

}

function findAlarmObjectIndex(el) {
    let index = el.parentElement.parentElement.dataset.value
    return index;
}



// TO DO

// 3. FIX DESKTOP DESIGN (ADD MEDIA QUERIES)
// Add local storage
// Add logic for only typing 2 numbers in input box


export { allAlarms, createAlarm, checkTimePeriod, deleteAlarmObject, activeFalse, activeTrue, loadActiveAlarms, loadOnBtns, sound, updateAlarmObject, findAlarmObjectIndex } 