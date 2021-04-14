var currentDay = $("#currentDay"); // Targets the area for the current date 
var currentHour = moment().format("HH"); // Targets the current hour 
console.log(currentHour); // Checking the current hour

var date = moment().format("dddd, MMMM Do YYYY"); // Formats the current date and saves it into date
currentDay.text(date); // Displays the current date
var currentTime = $("<p>"); // Create a new p tag with the current time
currentTime.text(moment().format("h:mm a")); // Store the current time
currentTime.attr("class", "time"); // Set class to time
currentDay.append(currentTime); // Append it to the current day

function colorChange() { // This function will change colors of the text area based on past, present, future

    for (var i = 10 ; i <= 18 ; i++) {

        var hourID = $("#" + i).attr("id") // Retrieves the hour from ID
        var textArea = $("#" + i) // Targets the text area

        if (currentHour > hourID) { 
            textArea.css("backgroundColor", "lightgrey"); // Changes the color for the past 
            
        } else if (currentHour === hourID) { 
            textArea.css("backgroundColor", "whitesmoke"); // Changes the color for the present time
        } else if (currentHour < hourID) {
            textArea.css("backgroundColor", "pink"); // Changes the color for the future
        } 
    }
};

colorChange(); // Starts the function on page load
