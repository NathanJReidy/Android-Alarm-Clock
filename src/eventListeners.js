import {
  showBlueTime,
  showBlueOnBtn,
  showWhiteAlarmDay,
  hideBlueTime,
  hideBlueOnBtn,
  hideWhiteAlarmDay,
  showExtendedCard,
  hideAlarmCardBorder,
  hideExtendedCard,
  showAlarmCardBorder,
  deleteAlarmCard,
  showOverlay,
  hideOverlay,
  hideDownIcon,
  showDownIcon,
  showModalCard,
  hideModalCard,
  showHoursClock,
  hideHoursClock,
  showMinutesClock,
  hideMinutesClock,
  updateHour,
  focusMinutes,
  updateMinutes,
  showWhiteAM,
  showGrayPM,
  showWhitePM,
  showGrayAM,
  updateTimeMinutes,
  updateTimeHour,
  updateTimePeriod,
} from "./DOMchanges.js";
import {
  createAlarm,
  checkTimePeriod,
  deleteAlarmObject,
  activeFalse,
  activeTrue,
  loadActiveAlarms,
  sound,
  updateAlarmObject,
  findAlarmObjectIndex,
} from "./logic.js";
import { loadAlarms } from "./DOMload.js";

let ok = document.querySelector(".ok");
let update = document.querySelector(".update");
let currentAlarmCardIndex = null;
let am = document.querySelector(".am");

// CORRECT Event listener for off button (i.e. when clicked it turns on)
let alarmsBody = document.querySelector(".alarmsBody");
alarmsBody.addEventListener("click", (e) => {
  let element = e.target;

  // Event listener to show blue button
  if (element.classList.contains("roundSliderGray")) {
    // Function that shows blue on btn
    showBlueOnBtn(element);

    // Function that shows blue time
    showBlueTime(element);

    // Function that shows white 'today'
    showWhiteAlarmDay(element);

    // Function that turns the element's active string to true
    activeTrue(element);
  }
  // Event listener to hide blue button
  else if (element.classList.contains("roundSliderBlue")) {
    // Function that hides blue on btn
    hideBlueOnBtn(element);

    // Function that hides blue time
    hideBlueTime(element);

    // Function that hides white 'today'
    hideWhiteAlarmDay(element);

    // Function that changes the element's active string in array to false
    activeFalse(element);
  }
  // Event listener for down icon to show extended card
  else if (element.classList.contains("downIcon")) {
    // Show extended card
    showExtendedCard(element);

    // Change alarm card background colour
    // changeAlarmCardBg(element);

    // Hide alarm card bottom border
    hideAlarmCardBorder(element);

    // Hide down icon
    hideDownIcon(element);
  }

  // Event listener for up arrow icon to hide extended card
  else if (element.classList.contains("upIcon")) {
    // Hide extended card
    hideExtendedCard(element);

    // Change alarm card background colour back to black
    // hideChangeAlarmCardBg(element);

    // Show alarm card bottom border again
    showAlarmCardBorder(element);

    // Show down icon
    showDownIcon(element);
  }

  // Event listener for delete button (deletes the whole alarm object from the array and re-loads the page)
  // We will have one event listener for the trash icon, and a separate event listener for the delete text.
  else if (
    element.classList.contains("deleteIcon") ||
    element.classList.contains("deleteText")
  ) {
    // Delete alarm object from array
    deleteAlarmObject(element);

    // Delete alarm card from screen
    deleteAlarmCard(element);
  }

  // Event listener for updating the alarm time when clicked
  else if (element.classList.contains("time")) {
    console.log("time class event listener runs!");
    // Show overlay
    showOverlay();

    // Show modal
    showModalCard();

    // Show correct time and period on modal
    updateTimeHour(element);
    updateTimeMinutes(element);
    updateTimePeriod(element);

    // Show update div, hide ok div
    ok.style.display = "none";
    update.style.display = "flex";

    currentAlarmCardIndex = findAlarmObjectIndex(element);
  }
});

// Event listener for time div (brings up main clock screen to update the alarm time). Send to update function to change the specific object in the array. Then remove everything on page then reload the page.

// Event listener for fixed plus button, to add a new alarm
let addAlarmBtn = document.querySelector(".addAlarmBtn");
addAlarmBtn.addEventListener("click", () => {
  console.log("addAlarmBtn event listeners runs!");
  // Show overlay
  showOverlay();

  // Show modal card
  showModalCard();

  // Hide update div, show ok div
  update.style.display = "none";
  ok.style.display = "flex";

  // Fake play then pause the sound button for the alarm. WHY? Because we want to get around iOS and Android sound policy. Sound (on iOS and Android) must be triggered by a user click.
  sound.play();
  sound.pause();
});

// Event listener for closing overlay when it is clicked
let overlay = document.querySelector(".overlay");
overlay.addEventListener("click", () => {
  // Hide overlay
  hideOverlay();

  // Hide modal card
  hideModalCard();
});

// Event listener for hours div in choosing alarm time. Shows numbers 1-12.
let inputAlarmTimeHour = document.querySelector(".inputAlarmTimeHour");
inputAlarmTimeHour.addEventListener("click", () => {
  // Show hours clock
  showHoursClock();

  // Hide minutes clock
  hideMinutesClock();
});

// If user enters invalid alarm time hours, remove their incorrect characters
inputAlarmTimeHour.addEventListener("keyup", () => {
  if (
    parseInt(inputAlarmTimeHour.value) > 12 ||
    parseInt(inputAlarmTimeHour.value[0]) == 0 ||
    inputAlarmTimeHour.value.match(/[a-zA-Z]+/) ||
    inputAlarmTimeHour.value.match(/[!@#$%^&*()_+\-=\[\]{};':"`~\\|,.<>\/?]/)
  ) {
    inputAlarmTimeHour.value = "";
  }
});

// Event listener for each of the numbers 1-12 & 00-55.
let modalFixed = document.querySelector(".modalFixed");
modalFixed.addEventListener("click", (e) => {
  let element = e.target;
  // Event listener for hour digits
  if (element.classList.contains("hourDigit")) {
    // Update inputAlarmTimeHour
    updateHour(element);

    // Focus the inputAlarmTimeMinutes input box
    focusMinutes();
  }
  // Event listener for minutes digits
  if (element.classList.contains("minutesDigit")) {
    // Update inputAlarmTimeMinutes
    updateMinutes(element);
  }
});

// Event listener for minutes div in choosing alarm time. Shows numbers 00-59 progressively depending on clicked position.
let inputAlarmTimeMinutes = document.querySelector(".inputAlarmTimeMinutes");
inputAlarmTimeMinutes.addEventListener("click", () => {
  // Show minutes clock
  showMinutesClock();

  // Hide hours clock
  hideHoursClock();
});

// If user enters invalid alarm time minutes, remove their incorrect characters
inputAlarmTimeMinutes.addEventListener("keyup", () => {
  if (
    parseInt(inputAlarmTimeMinutes.value) > 59 ||
    inputAlarmTimeMinutes.value.match(/[a-zA-Z]+/) ||
    inputAlarmTimeMinutes.value.match(/[!@#$%^&*()_+\-=\[\]{};':"`~\\|,.<>\/?]/)
  ) {
    inputAlarmTimeMinutes.value = "";
  }
});

// Event listener for period div (am)
// let am = document.querySelector(".am");
am.addEventListener("click", () => {
  // Change AM text colour to white
  showWhiteAM();

  // Change PM text color to gray
  showGrayPM();
});

// Event listener for period div (pm)
let pm = document.querySelector(".pm");
pm.addEventListener("click", () => {
  // Change PM text colour to white
  showWhitePM();

  // Change AM text color to gray
  showGrayAM();
});

// Event listener for 'cancel' <p> button. When clicked, hides add new alarm screen.
let cancel = document.querySelector(".cancel");
cancel.addEventListener("click", () => {
  // Hide modal card
  hideModalCard();

  // Hide overlay
  hideOverlay();
});

// Event listener for 'ok' <p> button. When clicked, pushes new alarm object to array and hides add new alarm screen.

ok.addEventListener("click", () => {
  // Create new alarm card object in array
  // i.e. extract the values from inputAlarmTimeHour and inputAlarmTimeMinutes as well as an if statement for whether AM or PM style.display is white (i.e. selected)
  let inputAlarmTimeHour = document.querySelector(".inputAlarmTimeHour");
  let inputAlarmTimeMinutes = document.querySelector(".inputAlarmTimeMinutes");
  let alarmsBody = document.querySelector(".alarmsBody");

  // Add new alarm to array of objects
  if (inputAlarmTimeHour.value != "" && inputAlarmTimeMinutes.value != "") {
    createAlarm(
      inputAlarmTimeHour.value,
      inputAlarmTimeMinutes.value,
      checkTimePeriod()
    );

    // Remove all existing alarm cards, then show new alarm card on screen by re-loading the entire DOM of the alarm cards in the array of objects)
    alarmsBody.innerHTML = "";
    document.addEventListener("DOMContentLoaded", loadAlarms());

    // Turn all active alarms on
    loadActiveAlarms();

    // Hide modal card
    hideModalCard();

    // Hide overlay
    hideOverlay();
  }
});

update.addEventListener("click", () => {
  let inputAlarmTimeHour = document.querySelector(".inputAlarmTimeHour");
  let inputAlarmTimeMinutes = document.querySelector(".inputAlarmTimeMinutes");
  let alarmsBody = document.querySelector(".alarmsBody");
  console.log("updateAlarm function triggered");

  // Create new alarm card object in array
  // i.e. extract the values from inputAlarmTimeHour and inputAlarmTimeMinutes as well as an if statement for whether AM or PM style.display is white (i.e. selected)
  // Update alarm in array of objects
  if (inputAlarmTimeHour.value != "" && inputAlarmTimeMinutes.value != "") {
    updateAlarmObject(
      currentAlarmCardIndex,
      inputAlarmTimeHour.value,
      inputAlarmTimeMinutes.value,
      checkTimePeriod()
    );

    // Remove all existing alarm cards, then show new alarm card on screen by re-loading the entire DOM of the alarm cards in the array of objects)
    alarmsBody.innerHTML = "";
    document.addEventListener("DOMContentLoaded", loadAlarms());

    // Turn all active alarms on
    loadActiveAlarms();

    // Hide modal card
    hideModalCard();

    // Hide overlay
    hideOverlay();
  }
});

// Initial page load of alarm objects in array
// document.addEventListener('DOMContentLoaded', loadAlarms());
// loadAlarms();

// Event listener for activated alarm card
// Run click event listener on activated alarm card 'dismiss' button
// When dismiss button is clicked, remove the activated alarm card
// from the DOM and stop the alarm
function stopActivatedAlarm() {
  let activatedAlarmFixed = document.querySelector(".activatedAlarmFixed");
  let dismissAlarmBtn = document.querySelector(".dismissAlarmBtn");

  dismissAlarmBtn.addEventListener("click", () => {
    // Removes activated alarm card from DOM
    activatedAlarmFixed.remove();

    // Stops alarm sound from playing
    sound.pause();

    console.log("dismiss btn listener clicked");
  });
}

export { stopActivatedAlarm };
