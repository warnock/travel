function Location(locationName, landmark, dateOfVisit, notes) {
  this.locationName = location;
  this.landmark = landmark;
  this.dateOfVisit = dateOfVisit;
  this.notes = notes;
}

$(document).ready(function() {
  $("form#newLocation").submit(function(event) {
    event.preventDefault();
    var location = $("input#newLocationName").val();
    var landmark = $("input#landmark").val();
    var date = $("input#dateOfVisit").val();
    var notes = $("input#notes").val();
    $("ul#location").append("<li>" + location + "</li>");
    $("input#newLocationName").val("");
    $("input#landmark").val("");
    $("input#dateOfVisit").val("");
    $("input#notes").val("");
  });
});
