import { allAlarms } from './logic.js'

// Load alarms from array of objects 
function loadAlarms() {
    allAlarms.forEach((alarm, index) => {
        
        const alarmsBody = document.querySelector('.alarmsBody');
        const alarmCard = document.createElement('div');
        alarmCard.className = "alarmCard";

        alarmCard.innerHTML = `
        <div id="alarmTopSection">
            <p class="time">${alarm.hours}:${alarm.minutes} ${alarm.period}</p>
            <div class="offBtn">
                <div class="roundSliderGray"></div>
                <div class="longSliderGray"></div>
            </div>
            <div class="onBtn">
                <div class="roundSliderBlue"></div>
                <div class="longSliderBlue"></div>
            </div>
        </div>
        <div id="alarmBottomSection">
            <p class="alarmDay">Today</p>
            <div id="downArrow">
                <svg class="downIcon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </div>
        </div>
        <div class="extendedCard">
            <div class="deleteCard">
                <svg class="deleteIcon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                <p class="deleteText">Delete</p>
            </div>
            <div class="upArrow">
                <svg class="upIcon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
            </div>
        </div>
        `

        alarmsBody.appendChild(alarmCard);
        

    })

}

// loadAlarms();

export { loadAlarms }
