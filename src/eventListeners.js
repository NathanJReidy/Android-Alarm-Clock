// Event listener for on/off button (active true or false)
let onBtns = document.querySelectorAll(".onBtn");
onBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let datasetValue = e.target.dataset.value;

        // Function that shows blue on btn

        // Function that shows blue time

        // Function that shows white 'tomorrow'
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