// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");
// Select the form
var form = d3.select("form");

// Create event handlers for clicking the button or pressing the enter key
form.on("submit",runEnter);
button.on("click", runEnter);

// Create the function to run for both events
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    // Print the value to the console
    console.log(inputValue);

    // Filter for data as per input value
    var data_display = tableData.filter((sighting)=>sighting.datetime == inputValue);

    // Create table
    var table_output = d3.select("#ufo-table") //define table
    table_output.select("tbody").remove() //remove any existing data in table
    var tbody = table_output.append("tbody") //append new tbody section
    data_display.forEach((datarow)=>{   //append rows of data to new tbody
    newrow = tbody.append("tr")
    newrow.append("td").text(datarow.datetime)
    newrow.append("td").text(datarow.city)
    newrow.append("td").text(datarow.state)
    newrow.append("td").text(datarow.country)
    newrow.append("td").text(datarow.shape)
    newrow.append("td").text(datarow.durationMinutes)
    newrow.append("td").text(datarow.comments)
    });
  }

