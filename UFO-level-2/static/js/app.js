// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");
// Select the form
var form = d3.select("form");

// Create event handlers for clicking the button or pressing the enter key
form.on("change",runEnter);
button.on("click", runEnter);


// Create the function to run for both events
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Reset Data table
    var data_display = tableData;

    // Select the input element and get the raw HTML node
    inputdate = d3.select("#datetime").property("value");
    inputcity = d3.select("#city").property("value");
    inputstate = d3.select("#state").property("value");
    inputcountry = d3.select("#country").property("value");
    inputshape = d3.select("#shape").property("value");

    // Filter for data as per input value if it exists
    if (inputdate != '') {
      data_display = data_display.filter((sighting)=>sighting.datetime == inputdate);
      console.log(inputdate);
    }    else{console.log("No Date")};

    if (inputcity != '') {
    data_display = data_display.filter((sighting)=>sighting.city == inputcity);
    console.log(inputcity);
    }else{console.log("No City")};

    if (inputstate != '') {
      data_display = data_display.filter((sighting)=>sighting.state == inputstate);
      console.log(inputstate);
    }else{console.log("No State")};

    if (inputcountry != '') {
      data_display = data_display.filter((sighting)=>sighting.country == inputcountry);
      console.log(inputcountry);
    }else{console.log("No Country")};

    if (inputshape != '') {
      data_display = data_display.filter((sighting)=>sighting.shape == inputshape);
      console.log(inputshape);
    }else{console.log("No Shape")};

    console.log("------------------")


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

