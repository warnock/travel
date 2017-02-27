function Location(locationName, landmark, dateOfVisit, notes) {
  this.locationName = locationName;
  this.landmark = landmark;
  this.dateOfVisit = dateOfVisit;
  this.notes = notes;
}

$(document).ready(function() {
  $("form#newLocation").submit(function(event) {
    event.preventDefault();
    var inputtedLocationName = $("input#locationName").val();
    var inputtedLandmark = $("input#landmark").val();
    var inputtedDate = $("input#dateOfVisit").val();
    var inputtedNotes = $("input#notes").val();
    var newLocation = new Location(inputtedLocationName, inputtedLandmark, inputtedDate, inputtedNotes);
    $("ul#location").append("<li><span class='location'>" + inputtedLocationName + "</li>");
    $("input#locationName").val("");
    $("input#landmark").val("");
    $("input#dateOfVisit").val("");
    $("input#notes").val("");

    $(".location").last().click(function() {
      debugger;
      $("#locationDetails").show();
      $("#locationDetails h2").text(newLocation.locationName);
console.log(newLocation.locationName);
      $(".locationName").text(newLocation.locationName);
      $(".landmark").text(newLocation.landmark);
      $(".date").text(newLocation.dateOfVisit);
      $(".notes").text(newLocation.notes);
    });
  });
});
