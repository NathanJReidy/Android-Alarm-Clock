import { showBlueTime, showBlueOnBtn, showWhiteAlarmDay, hideBlueTime, hideBlueOnBtn, hideWhiteAlarmDay, showExtendedCard, hideAlarmCardBorder, changeAlarmCardBg, hideExtendedCard, hideChangeAlarmCardBg, showAlarmCardBorder, deleteAlarmCard } from './DOMchanges.js'


// Event listener for off button (i.e. when clicked it turns on)
let roundSliderGray= document.querySelectorAll(".roundSliderGray");
roundSliderGray.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let datasetValue = e.target.parentNode.parentNode.parentNode.dataset.value;
        console.log(datasetValue);

        // Function that shows blue on btn
        showBlueOnBtn(datasetValue);

        // Function that shows blue time
        showBlueTime(datasetValue);

        // Function that shows white 'tomorrow'
        showWhiteAlarmDay(datasetValue);
    })
})

// Event listener for on button (i.e. when clicked it turns off)
let roundSliderBlue= document.querySelectorAll(".roundSliderBlue");
roundSliderBlue.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let datasetValue = e.target.parentNode.parentNode.parentNode.dataset.value;
        console.log(datasetValue);

        // Function that shows blue on btn
        hideBlueOnBtn(datasetValue);

        // Function that shows blue time
        hideBlueTime(datasetValue);

        // Function that shows white 'tomorrow'
        hideWhiteAlarmDay(datasetValue);
    })
})



// Event listener for time div (brings up main clock screen to update the alarm time). Send to update function to change the specific object in the array. Then remove everything on page then reload the page.




// Event listener for down arrow (brings up extra card appended at the bottom of main card)
let downIcon = document.querySelectorAll(".downIcon");
downIcon.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let datasetValue = e.target.parentNode.parentNode.parentNode.dataset.value;

        // Show extended card 
        showExtendedCard(datasetValue);

        // Change alarm card background colour 
        changeAlarmCardBg(datasetValue);

        // Hide alarm card bottom border
        hideAlarmCardBorder(datasetValue);

    })
})

// Event listner for up arrow icon to hide extended card
let upIcon = document.querySelectorAll(".upIcon");
upIcon.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let datasetValue = e.target.parentNode.parentNode.parentNode.dataset.value;

        // Hide extended card 
        hideExtendedCard(datasetValue);

        // Change alarm card background colour back to black
        hideChangeAlarmCardBg(datasetValue);

        // Show alarm card bottom border again
        showAlarmCardBorder(datasetValue);

    })
})


// Event listener for delete button (deletes the whole alarm object from the array and re-loads the page)
// We will have one event listener for the trash icon, and a separate event listener for the delete text.

let deleteIcon = document.querySelectorAll(".deleteIcon");
deleteIcon.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let datasetValue = e.target.parentNode.parentNode.parentNode.dataset.value;

        // Delete alarm object form array
        


        // Delete alarm card from screen 
        deleteAlarmCard(datasetValue);
    })
})

let deleteText = document.querySelectorAll(".deleteText");
deleteText.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let datasetValue = e.target.parentNode.parentNode.parentNode.dataset.value;

        // Delete alarm object form array
        


        // Delete alarm card from screen 
        deleteAlarmCard(datasetValue);
    })
})





// Event listener for fixed plus button, to add a new alarm


// Event listener for hours div in choosing alarm time. Shows numbers 1-12.

// Event listener for each of the numbers 1-12. 


// Event listener for minutes div in choosing alarm time. Shows numbers 00-59 progressively depending on clicked position. 

// Event listener for each of the numbers 00-59. 


// Event listener for period div (am)


// Event listener for period div (pm)


// Event listener for 'cancel' <p> button. When clicked, hides add new alarm screen.


// Event listener for 'ok' <p> button. When clicked, pushes new alarm object to array and hides add new alarm screen. 


// Event listener for modal overlay. When clicked, hides add new alarm screen. 