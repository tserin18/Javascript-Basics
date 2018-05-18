// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $filterInput = document.querySelector("#filter");
var $searchBtn = document.querySelector("#search");
// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filteredAddresses to addressData initially
var filteredData = dataSet;
// renderTable renders the filteredAddresses to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredData.length; i++) {
    // Get get the current address object and its fields
    var data = filteredData[i];
    var fields = Object.keys(data);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = data[field];
    }
  }
  $(document).ready(function () {
    var firstRecord = 0;
    var rowSize = 10;
    var tableRows=$("#ufoTable tbody tr");
    $("a.pagination").click(function(e){
      e.preventDefault();
      if ($(this).attr("id") == "next"){
            if (firstRecord + rowSize <= tableRows.length){
                firstRecord += rowSize;}
            } else {
            if (firstRecord!= 0)
             { firstRecord  -= rowSize;}
            }
         paginate(firstRecord, rowSize);
       });

     var paginate =function(startAt, rowSize){
       var endAt=startAt + rowSize - 1;
         $(tableRows).each(function(index){
           if (index >= startAt && index <= endAt){
             $(this).show();
           } else{
             $(this).hide();
           }
         });
     }
     paginate(firstRecord, rowSize);
     
  });
  
}
// Render the table for the first time on page loa

function handleSearchButtonClick() {
  console.log(document.getElementById("mySelect").value.trim().toLowerCase());

  var filterType =document.getElementById("mySelect").value.trim().toLowerCase();
    // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterText = $filterInput.value.trim().toLowerCase();

  if(filterType === "datetime"){
    // Set filteredAddresses to an array of all addresses whose "state" matches the filter
    filteredData = dataSet.filter(function(data) {
        var dataDatetime = data.datetime.toLowerCase();

            // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
        return dataDatetime === filterText;
    });
  }
  
  if(filterType === "city"){
    // Set filteredAddresses to an array of all addresses whose "state" matches the filter
    filteredData = dataSet.filter(function(data) {
        var dataCity = data.city.toLowerCase();

            // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
        return dataCity === filterText;
    });
  }
  
  if(filterType === "state"){
    // Set filteredAddresses to an array of all addresses whose "state" matches the filter
    filteredData = dataSet.filter(function(data) {
        var dataState = data.state.toLowerCase();

            // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
        return dataState === filterText;
    });
  }

  if(filterType === "country"){
    // Set filteredAddresses to an array of all addresses whose "state" matches the filter
    filteredData = dataSet.filter(function(data) {
        var dataCountry = data.country.toLowerCase();

            // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
        return dataCountry === filterText;
    });
  }

  if(filterType === "shape"){
    // Set filteredAddresses to an array of all addresses whose "state" matches the filter
    filteredData = dataSet.filter(function(data) {
        var dataShape = data.shape.toLowerCase();
            // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
        return dataShape === filterText;
    });
  }

  if(filterType === "all"){
    // Set filteredAddresses to an array of all addresses whose "state" matches the filter
    filteredData = dataSet
  }

  renderTable();
}
renderTable();

