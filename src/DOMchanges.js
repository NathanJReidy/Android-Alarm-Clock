// When on (active) button is clicked, change the time div to blue. 
function showBlueTime(index) {
    let time = document.querySelectorAll(".time");

    time[index].style.color = "rgb(75, 127, 240)";
}

// When off (active false) button is clicked, change the time div back to gray.
function hideBlueTime(index) {
    let time = document.querySelectorAll(".time");

    time[index].style.color = "inherit";
}


// When on (active) button is clicked, change the on (active) button to blue and change positioning of the circle to the RHS.
function showBlueOnBtn(index) {
    let onBtn = document.querySelectorAll(".onBtn");
    let offBtn = document.querySelectorAll(".offBtn");

    onBtn[index].style.display = 'flex';
    offBtn[index].style.display = 'none';
}

// When off (active false) button is clicked, change the off (active false) button to gray and change positioning of the circle to the LHS.
function hideBlueOnBtn(index) {
    let onBtn = document.querySelectorAll(".onBtn");
    let offBtn = document.querySelectorAll(".offBtn");

    onBtn[index].style.display = 'none';
    offBtn[index].style.display = 'flex';
}

// When on (active) button is clicked, change the 'tomorrow' text class to white. 
function showWhiteAlarmDay(index) {
    let alarmDay = document.querySelectorAll(".alarmDay");

    alarmDay[index].style.color = "whitesmoke";
}

// When off (active false) button is clicked, change the 'tomorrow' text class back to gray. 
function hideWhiteAlarmDay(index) {
    let alarmDay = document.querySelectorAll(".alarmDay");

    alarmDay[index].style.color = "inherit";
}






// Show extended card (when down arrow is clicked)

// Hide extended card (when up arrow is clicked)



// Show overlay (black background, with opacity)

// Hide overlay 

// Show modal card (when adding or updating an alarm). Pass an index into this function so that you can link the datasetValue of the clicked alarm number you want to update (on the main screen) to the automatically displayed alarm number on the modal card.

// Hide modal card (when clicking overlay, clicking cancel, or clicking ok)

// Have a function for choosing the correct default clock to display when the user tries to edit/update the alarm time. e.g. showCorrectClock(index), then based on whether that indexed alarm is am or pm, display the correct starting position in terms of whether you show the 1-12 number block or 00-59 number clock.




// Update modal alarm digital time display (when an hours is clicked)

// Update modal alarm analog time display (when an hours is clicked). I.e. change which hours div is highlighted in blue and rounded fully in the circular clock.

// Show hours clock (numbers 1-12)

// Hide hours clock (numbers 1-12)



// Update modal alarm digital time display (when a minutes is clicked)

// Update modal alarm analog time display (when a minutes is clicked). I.e. change which minutes div is highlighted in blue and rounded fully in the circular clock.

// Show minutes clock (numbers 00-59)

// Hide minutes clock (numbers 00-59)

 




export { showBlueTime, showBlueOnBtn, showWhiteAlarmDay, hideBlueTime, hideBlueOnBtn, hideWhiteAlarmDay }