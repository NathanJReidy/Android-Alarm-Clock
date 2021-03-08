// CORRECT When on (active) button is clicked, change the time div to blue. 
function showBlueTime(el) {
    if (el.classList.contains('roundSliderGray')) {
        el.parentElement.previousElementSibling.style.color = "rgb(75, 127, 240)";
    }
}

// CORRECT When off (active false) button is clicked, change the time div back to gray.
function hideBlueTime(el) {
    if (el.classList.contains('roundSliderBlue')) {
        el.parentElement.previousElementSibling.previousElementSibling.style.color = "inherit";
    }
}

// CORRECT When on (active) button is clicked, change the on (active) button to blue and change positioning of the circle to the RHS.
function showBlueOnBtn(el) {
    if (el.classList.contains('roundSliderGray')) {
        el.parentElement.style.display = 'none';
        el.parentElement.nextElementSibling.style.display = 'flex';
    };
};

// CORRECT When off (active false) button is clicked, change the off (active false) button to gray and change positioning of the circle to the LHS.
function hideBlueOnBtn(el) {
    if (el.classList.contains('roundSliderBlue')) {
        el.parentElement.style.display = 'none';
        el.parentElement.previousElementSibling.style.display = 'flex';
    }
}

// CORRECT When on (active) button is clicked, change the 'tomorrow' text class to white. 
function showWhiteAlarmDay(el) {
    if (el.classList.contains('roundSliderGray')) {
        el.parentElement.parentElement.nextElementSibling.firstElementChild.style.color = "whitesmoke";
    }
}

// CORRECT When off (active false) button is clicked, change the 'tomorrow' text class back to gray. 
function hideWhiteAlarmDay(el) {
    if (el.classList.contains('roundSliderBlue')) {
        el.parentElement.parentElement.nextElementSibling.firstElementChild.style.color = "inherit";
    }
}

// CORRECT Show extended card (when down arrow is clicked)
function showExtendedCard(el) {
    if (el.classList.contains('downIcon')) {
        el.parentElement.parentElement.nextElementSibling.style.display = 'flex';

    }
}

// CORRECT Hide extended card (when up arrow is clicked)
function hideExtendedCard(el) {
    if (el.classList.contains('upIcon')) {
        el.parentElement.parentElement.style.display = 'none';
    }
}

// CORRECT Hide bottom border of alarm card
function hideAlarmCardBorder(el) {
    if (el.classList.contains('downIcon')) {
        el.parentElement.parentElement.parentElement.style.borderBottom = "none";
    }
}

// CORRECT Show bottom border of alarm card
function showAlarmCardBorder(el) {
    if (el.classList.contains('upIcon')) {
        el.parentElement.parentElement.parentElement.style = "border-bottom: 1px solid gray;";
    }
}

// CORRECT Change background colour of alarm card to gray
function changeAlarmCardBg(el) {
    if (el.classList.contains('downIcon')) {
        el.parentElement.parentElement.parentElement.style =  "background-color: rgb(27, 27, 27)";
    }

}

// CORRECT Change background colour of alarm card to black again
function hideChangeAlarmCardBg(el) {
    if (el.classList.contains('upIcon')) {
        el.parentElement.parentElement.parentElement.style = "background-color: none";
    }
}

// CORRECT Hide (i.e. delete) alarm card from screen
function deleteAlarmCard(el) {
    if (el.classList.contains('deleteIcon') || el.classList.contains('deleteText')) {
        el.parentElement.parentElement.parentElement.style.display = 'none';
    }
}




// Show overlay (black background, with opacity)
function showOverlay() {
    let overlay = document.querySelector(".overlay");
    overlay.style.display = "flex";
}

// Hide overlay 
function hideOverlay() {
    let overlay = document.querySelector(".overlay");
    overlay.style.display = "none";
}


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

 




export { showBlueTime, showBlueOnBtn, showWhiteAlarmDay, hideBlueTime, hideBlueOnBtn, hideWhiteAlarmDay, showExtendedCard, hideAlarmCardBorder, changeAlarmCardBg, hideExtendedCard, hideChangeAlarmCardBg, showAlarmCardBorder, deleteAlarmCard, showOverlay, hideOverlay }