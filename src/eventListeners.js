import { showBlueTime, showBlueOnBtn, showWhiteAlarmDay, hideBlueTime, hideBlueOnBtn, hideWhiteAlarmDay } from './DOMchanges.js'


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


// Event listener for up arrow (hides the extra card appended)


// Event listener for delete button (deletes the whole alarm object from the array and re-loads the page)


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