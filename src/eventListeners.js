import { showBlueTime, showBlueOnBtn, showWhiteAlarmDay, hideBlueTime, hideBlueOnBtn, hideWhiteAlarmDay, showExtendedCard, hideAlarmCardBorder, changeAlarmCardBg, hideExtendedCard, hideChangeAlarmCardBg, showAlarmCardBorder, deleteAlarmCard, showOverlay, hideOverlay } from './DOMchanges.js'



// CORRECT Event listener for off button (i.e. when clicked it turns on)
let alarmsBody = document.querySelector(".alarmsBody");
alarmsBody.addEventListener("click", (e) => {
    let element = e.target;
    console.log(element);


    // Event listener to show blue button 
    if (element.classList.contains('roundSliderGray')) {
        // Function that shows blue on btn
        showBlueOnBtn(element);

        // Function that shows blue time
        showBlueTime(element);

        // Function that shows white 'today'
        showWhiteAlarmDay(element);
    }
    // Event listener to hide blue button 
    else if (element.classList.contains('roundSliderBlue')) {
        // Function that shows blue on btn
        hideBlueOnBtn(element);

        // Function that shows blue time
        hideBlueTime(element);

        // Function that shows white 'today'
        hideWhiteAlarmDay(element);

    }
    // Event listener for down icon to show extended card
    else if (element.classList.contains('downIcon')) {
        // Show extended card 
        showExtendedCard(element);

        // Change alarm card background colour 
        changeAlarmCardBg(element);

        // Hide alarm card bottom border
        hideAlarmCardBorder(element);

    }

    // Event listener for up arrow icon to hide extended card
    else if (element.classList.contains('upIcon')) {
        // Hide extended card 
        hideExtendedCard(element);

        // Change alarm card background colour back to black
        hideChangeAlarmCardBg(element);

        // Show alarm card bottom border again
        showAlarmCardBorder(element);

    }

    // Event listener for delete button (deletes the whole alarm object from the array and re-loads the page)
    // We will have one event listener for the trash icon, and a separate event listener for the delete text.
    else if (element.classList.contains('deleteIcon') || element.classList.contains('deleteText')) {
        // Delete alarm object form array
        


        // Delete alarm card from screen 
        deleteAlarmCard(element);

    }

})





// Event listener for time div (brings up main clock screen to update the alarm time). Send to update function to change the specific object in the array. Then remove everything on page then reload the page.





// Event listener for fixed plus button, to add a new alarm
let addAlarmBtn = document.querySelector(".addAlarmBtn");
addAlarmBtn.addEventListener("click", () => {
    // Show overlay 
    showOverlay();

    // Show modal card 


})

// Event listener for closing overlay when it is click
let overlay = document.querySelector(".overlay");
overlay.addEventListener("click", () => {
    // Hide overlay
    hideOverlay();

    // Hide modal card

})



// Event listener for hours div in choosing alarm time. Shows numbers 1-12.

// Event listener for each of the numbers 1-12. 


// Event listener for minutes div in choosing alarm time. Shows numbers 00-59 progressively depending on clicked position. 

// Event listener for each of the numbers 00-59. 


// Event listener for period div (am)


// Event listener for period div (pm)


// Event listener for 'cancel' <p> button. When clicked, hides add new alarm screen.


// Event listener for 'ok' <p> button. When clicked, pushes new alarm object to array and hides add new alarm screen. 


// Event listener for modal overlay. When clicked, hides add new alarm screen. 