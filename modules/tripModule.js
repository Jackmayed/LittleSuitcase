function getTrip(){
  //Pull current trips from database based on user email in login
  var userID = getUserID();
  var httpClient = new kony.net.HttpRequest();
  httpClient.open(constants.HTTP_METHOD_GET, "https://littlesuitcase-7735.restdb.io/rest/useraccounts" + "/" + userID, false);
  httpClient.setRequestHeader("x-apikey", "1368977aab130f9a6e6ec87cbb08c152ad458");
  
  try {
    httpClient.send();
    var response = httpClient.response;
    var form = kony.application.getCurrentForm();

    form.ProfileNationality.text = response.Nationality;
    form.ProfileAge.text = response.Age;
    form.ProfileBirthdate.text = response.Birthdate;
    form.ProfileLuggage.text = response.Luggage;
    form.ProfileName.text = response.Name;
  } catch(err) {
    kony.ui.Alert({message: err + "from getProfile()"}, {});
  }
}

function createTrip(){
  //New trips are created
  var form = kony.application.getCurrentForm();
  var departure = form.departureinput.text;
  var destination = form.destinationinput.text;
  var start = String(form.startcalendar.formattedDate); 
  var end = String(form.endcalendar.formattedDate);
  var assignedUser = getEmail(getUserID());

  //Places new info to the proper api key for database
  var httpclient = new kony.net.HttpRequest();
  httpclient.open(constants.HTTP_METHOD_POST, "https://littlesuitcase-7735.restdb.io/rest/userspecifictrips", false);
  httpclient.setRequestHeader("x-apikey", "1368977aab130f9a6e6ec87cbb08c152ad458");
  httpclient.setRequestHeader("Content-Type", "application/json");

  //Posts edited info to database and assigns them to proper fields
  var postdata = {
    "Destination": destination,
    "Departure" : departure,
    "Start" : start, 
    "FirstFlight" : "",
    "flightTime" : "",
    "Accomodation" : "",
    "End" : end,
    "LastFlight": "",
    "flightTime2" : "",
    "packinglist" : "", 
    "placestoSee" : "",
    "AssignedUser": assignedUser
  };
  try{
    httpclient.send(postdata); 
  }catch (err){
    kony.ui.Alert({message: err + " from createTrip() method"}, {});
  }
}

function fromSuggestion(){
  //If user wants to create trip from suggestion function, they can transfer destination name to 'create trip' page
  var previousForm = kony.application.getPreviousForm();
  if(previousForm.id == "TripForm") {
    var destination = previousForm.LocationName.text;
    var form = kony.application.getCurrentForm();
    form.destinationinput.text = destination;
  }
}