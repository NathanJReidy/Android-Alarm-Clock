import { loadActivatedAlarm } from "./DOMload.js";
import { stopActivatedAlarm } from "./eventListeners.js";
import { loadAlarms } from "./DOMload.js";
import {
  updateTimeHour,
  updateTimeMinutes,
  updateTimePeriod,
} from "./DOMchanges.js";
import { getAlarms } from "./localStorage.js";

// Create an array of objects to store alarm data. Note that
// an example alarm object is included in the array so that an initial alarm is shown
// (for illustrative purposes only)
// let allAlarms = [
//     {
//     "hours": "10",
//     "minutes": "45",
//     "period": "am",
//     "active": false,
//     },
// ];

function createAlarm(hours, minutes, period) {
  const allAlarms = getAlarms();

  allAlarms.push({
    hours,
    minutes,
    period,
    active: true,
  });

  localStorage.setItem("allAlarms", JSON.stringify(allAlarms));
}

function deleteAlarmObject(el) {
  const allAlarms = getAlarms();

  let index = el.parentElement.parentElement.parentElement.dataset.value;
  allAlarms.splice(index, 1);

  localStorage.setItem("allAlarms", JSON.stringify(allAlarms));
}

// Check whether AM or PM is selected
function checkTimePeriod() {
  let am = document.querySelector(".am");
  let pm = document.querySelector(".pm");

  if (am.style.color == "white") {
    return "am";
  }

  if (pm.style.color == "white") {
    return "pm";
  } else {
    return "am";
  }
}

// Change active string to false
function activeFalse(el) {
  const allAlarms = getAlarms();

  let index = el.parentElement.parentElement.parentElement.dataset.value;
  allAlarms[index].active = false;

  localStorage.setItem("allAlarms", JSON.stringify(allAlarms));
}

// Change active string to true
function activeTrue(el) {
  const allAlarms = getAlarms();

  let index = el.parentElement.parentElement.parentElement.dataset.value;
  allAlarms[index].active = true;

  localStorage.setItem("allAlarms", JSON.stringify(allAlarms));
}

function loadActiveAlarms() {
  const allAlarms = getAlarms();

  allAlarms.forEach((alarm, index) => {
    if (alarm.active === true) {
      loadOnBtns(index);
    } else if (alarm.active === false) {
      loadOffBtns(index);
    }
  });
}

// Run loadActiveAlarms() so correct on/off blue/gray button is displated on first page load
// document.addEventListener('DOMContentLoaded', loadActiveAlarms());

function loadOnBtns(index) {
  let alarmCards = document.querySelectorAll(".alarmCard");
  let selectedAlarm = alarmCards[index];
  let selectedRoundSliderGray =
    selectedAlarm.children[0].children[1].children[0];

  // Mimick on button being clicked to trigger on btn event listener, which turns time text to blue, on button to blue and 'today' text to white
  selectedRoundSliderGray.click();
}

function loadOffBtns(index) {
  let alarmCards = document.querySelectorAll(".alarmCard");
  let selectedAlarm = alarmCards[index];
  let selectedRoundSliderBlue =
    selectedAlarm.children[0].children[2].children[0];

  // Mimick off button being clicked to trigger off btn event listener, which turns time text to gray, on button to gray and 'today' text to gray
  selectedRoundSliderBlue.click();
}

// When alarm time equals the current time, play the alarm sound
// let sound = new Audio("https://onlineclock.net/audio/options/default.mp3");
// Store MP3 Alarm Clock sound in Google Drive
let sound = new Audio(
  "https://docs.google.com/uc?export=download&id=15v1HEEETI9ocHkt4a6dInWRVOskN0ST4"
);

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
    let period = date.getHours() < 12 ? "am" : "pm";

    // Change single digit minutes to double digit minutes
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    let currentTime = `${hours}:${minutes}${period}`;
    console.log(`currentTime is ${currentTime}`);

    const allAlarms = getAlarms();

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
          localStorage.setItem("allAlarms", JSON.stringify(allAlarms));

          // Turn alarm card off by re-loading the DOM so that the alarm btn, text etc turn gray again (i.e. shows the alarm is off)
          loadActiveAlarms();
        }
      }
    });
  }, 1000);
}

// Run the Alarm
runAlarm();

// Update alarm object
function updateAlarmObject(index, updatedHour, updatedMinutes, updatedPeriod) {
  const allAlarms = getAlarms();

  allAlarms[index].hours = updatedHour;
  allAlarms[index].minutes = updatedMinutes;
  allAlarms[index].period = updatedPeriod;

  console.log(allAlarms[index].minutes);
  console.log("updateAlarmObject runs!");

  localStorage.setItem("allAlarms", JSON.stringify(allAlarms));
}

function findAlarmObjectIndex(el) {
  let index = el.parentElement.parentElement.dataset.value;
  return index;
}

export {
  createAlarm,
  checkTimePeriod,
  deleteAlarmObject,
  activeFalse,
  activeTrue,
  loadActiveAlarms,
  loadOnBtns,
  sound,
  updateAlarmObject,
  findAlarmObjectIndex,
};
