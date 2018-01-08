function tripInventory(){
  var userID = getUserID();
  var httpClient = new kony.net.HttpRequest();
  httpClient.open(constants.HTTP_METHOD_GET, "https://littlesuitcase-7735.restdb.io/rest/userspecifictrips" + "/" + userID, false);
  httpClient.setRequestHeader("x-apikey", "1368977aab130f9a6e6ec87cbb08c152ad458");
  try {
    httpClient.send();
    var response = httpClient.response;
    alert("Trip Inventory");
    var form = kony.application.getCurrentForm();

    form.ProfileNationality.text = response.Nationality;

  } catch(err) {
    alert("No trips planned");
  }
}

function addedTrip(){
  var form = kony.application.getCurrentForm();
  var departure = form.departureinput.text;
  var destination = form.destinationinput.text;
  var start = form.startcalendar.formattedDate; 
  var end = form.endcalendar.formattedDate;
  var assignedUser = getEmail(getUserID());

  kony.ui.Alert({message: "Start: " + start + ", End: " + end}, {});

  var httpclient = new kony.net.HttpRequest();
  httpclient.open(constants.HTTP_METHOD_POST, "https://littlesuitcase-7735.restdb.io/rest/userspecifictrips", false);
  httpclient.setRequestHeader("x-apikey", "1368977aab130f9a6e6ec87cbb08c152ad458");
  httpclient.setRequestHeader("Content-Type", "application/json");

  var postdata = {
    "Departure" : departure, 
    "Destination" : destination,
    "Start" : start,
    "End" : end,
    "AssignedUser" : assignedUser
  };
  try{
    httpclient.send(postdata); 
  }catch (err){
    alert("Unable to Process");
  }
}

function getAllTrips(){
  var currentUser = getEmail(getUserID());

  var httpclient = new kony.net.HttpRequest();
  httpclient.open(constants.HTTP_METHOD_GET, "https://littlesuitcase-7735.restdb.io/rest/userspecifictrips", false);
  httpclient.setRequestHeader("x-apikey", "1368977aab130f9a6e6ec87cbb08c152ad458");


  try {
    httpclient.send();
    var response = httpclient.response;
    var tripIDs = [];

    for (var i in response) {
      if (response[i].AssignedUser == currentUser) {
        //if the email is associated with the entry
        //create an object for the list
      }
    }

    alert("alltrips nope");
  } catch(err) {
    alert("Request Denied");
  }
}