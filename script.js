var saveBtn = $(".saveBtn"); // Targets the save button 

function showCalendar() { // Will display the saved values obtained from local storage
    var allInputs = JSON.parse(localStorage.getItem("items"));
    if (allInputs !== null) {
        for (i = 0; i < allInputs.length; i++) {
            $('#' + allInputs[i].hour).val(allInputs[i].input);
        }
    }
}

function saveToLocalStorage(e) { // Saves the values to local storage 
    e.preventDefault();
    var array = []; 
    for (i = 10; i <= 18; i++) { // 10-18 is meant for each time block for 10AM- 5PM
        var value = $('#' + i).val(); // Retrieves the input value 
        if (value) { // Checks if there was a value entered 
            var storeObject = { // Creates an object that stores the hour and value in that hour
                hour: i,
                input: value
            }
            array.push(storeObject); // Push that object into an array
            localStorage.setItem("items", JSON.stringify(array)); // Turns the object into a string and sets it as 
        }
    }
}

showCalendar(); // Calls the function to display from local storage on page load
saveBtn.on("click", saveToLocalStorage); // When the save button is clicked, the values are saved to local storage






