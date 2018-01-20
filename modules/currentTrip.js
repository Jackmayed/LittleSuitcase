var currentTrip = "";

function getGlobalTrip(){
  return currentTrip;
}

function setGlobalTrip(newTrip){
  try {
    currentTrip = newTrip;
    alert("from setGlobalTrip(): currentTrip = " + currentTrip);
    var nav = new kony.mvc.Navigation("userTripForm");
    nav.navigate();
  } catch(err) {
    alert(err.message);
  }
  
}

function getUserSpecificTrips(){
  //Obtain user info from database that pertains to email used in login
  var userID = getUserID();
  var currentTrip = getGlobalTrip();
  
  alert("currentTrip = " + currentTrip);
  
  var httpClient = new kony.net.HttpRequest();
  httpClient.open(constants.HTTP_METHOD_GET, "https://littlesuitcase-7735.restdb.io/rest/userspecifictrips/" + currentTrip, false);
  httpClient.setRequestHeader("x-apikey", "1368977aab130f9a6e6ec87cbb08c152ad458");

  //Places pulled info into correct profile text boxes
  try {
    httpClient.send();
    var response = httpClient.response;
    var form = kony.application.getCurrentForm();

    form.mainTitle.text = response.Destination;
    form.departureBox.text = response.Departure;
    form.startingOn.text = response.Start;
    form.flightInfo.text = response.FirstFlight;
    form.startFlight.text = response.flightTime;
    form.Accomodation.text = response.Accomodation;
    form.endingOn.text = response.End;
    form.flightEnd.text = response.LastFlight;
    form.flightTime2.text = response.flightTime2;
    form.packingList.text = response.packinglist;
    form.sightSeeing.text = response.placestoSee;

  } catch(err) {
    alert("Trip not obtained");
  }
}

function saveTrips() {
  //Get the current user ID
  var userID = getUserID();

  //Get User profile information to display
  var email = getEmail(userID);
  var destination = kony.application.getCurrentForm().mainTitle.text;
  var departure = kony.application.getCurrentForm().departureBox.text;
  var start = kony.application.getCurrentForm().startingOn.text;
  var flightStart = kony.application.getCurrentForm().flightInfo.text;
  var flightTime = kony.application.getCurrentForm().startFlight.text;
  var hotel = kony.application.getCurrentForm().Accomodation.text;
  var end = kony.application.getCurrentForm().endingOn.text;
  var flightEnd = kony.application.getCurrentForm().flightEnd.text;
  var secondTime = kony.application.getCurrentForm().flightTime2.text;
  var packingList = kony.application.getCurrentForm().packingList.text;
  var placesToSee = kony.application.getCurrentForm().sightSeeing.text;

  //Update changes from app in database
  var httpClient = new kony.net.HttpRequest();
  httpClient.open(constants.HTTP_METHOD_POST, "https://littlesuitcase-7735.restdb.io/rest/userspecifictrips", false);
  httpClient.setRequestHeader("x-apikey", "1368977aab130f9a6e6ec87cbb08c152ad458");
  httpClient.setRequestHeader("Content-Type", "application/json");

  var postdata = {
    "Destination": destination,
    "Departure" : departure,
    "Start" : start, 
    "FirstFlight" : flightStart,
    "flightTime" : flightTime,
    "Accomodation" : hotel,
    "End" : end,
    "LastFlight": flightEnd,
    "flightTime2" : secondTime,
    "packinglist" : packingList, 
    "placestoSee" : placesToSee,
    "AssignedUser": userID

  };
  try{
    httpClient.send(postdata); 
  }catch (err){
    alert("Unable to save");
  }

}

function addListItems() {  
 // var userID = getUserID();
 // var userEmail = getUserEmail(userID);
  var httpclient = new kony.net.HttpRequest();
  httpclient.open(constants.HTTP_METHOD_GET, "https://littlesuitcase-7735.restdb.io/rest/userspecifictrips", false);
  httpclient.setRequestHeader("x-apikey", "1368977aab130f9a6e6ec87cbb08c152ad458");
  httpclient.send();

  try {
    //Get the response from the database
    var response = httpclient.response;
    var listTripIDs = [];

    //declare a height that increases with each new item to be able to add it under the others
    var height = 3;
    //for each element of the response
    for (var i = 0; i < response.length; i++) {
      //create the basic parameters for the lable
      //The ID of the label is that same as that of the entry in the database
      //The Text of the label is the same as the destination
//       var lblBasic = {id: "l" + response[i]._id, skin:"slLabel", text: response[i].Destination, isVisible:true};
//       var lblLayout = {containerWeight:100, padding:[5, height ,5,5], margin:[5,5,5,5], hExpand:true, vExpand:false};
//       var pspConf = {renderAsAnchor:true, wrapping:constants.WIDGET_TEXT_WORD_WRAP};
      var clickFunction = function() { setGlobalTrip(response[i]._id);};
      var btnBasic = {id: "l" + response[i]._id, skin:"btnSkin", focusSkin:"btnFSkin", text: response[i].Destination, isVisible:true, clickFunction};
      var btnLayout = {containerWeight:100, padding:[5, height ,5,5], margin:[5,5,5,5], hExpand:true, vExpand:false};
      var pspConf = {renderAsAnchor:true, wrapping:constants.WIDGET_TEXT_WORD_WRAP};

      listTripIDs.push(response[i]._id);

      //create the actual label
//       var lbl = new kony.ui.Label(lblBasic, lblLayout, pspConf);
      var btn = new kony.ui.Button(btnBasic, btnLayout, pspConf);
      //add the label to the flexScrollContainer
      kony.application.getCurrentForm().FlexScrollContainer0dc5150f2abf24d.add(btn);
      //increase the height of the padding
      // height += 9; is the same as saying height = height + 9;
      height += 30;
    } 
    
    //for each of the tripIDs, assign them a new function
    

  } catch (err) {
    kony.ui.Alert({message: "from addListItems(): " + err.message}, {});
  }

}


function testFunction(sth) {
  //var currentTrip = getGlobalTrip();
  alert("Param = " + sth);
}

function getUserEmail(){
  
  var httpclient = new kony.net.HttpRequest();
  httpclient.open(constants.HTTP_METHOD_GET, "https://littlesuitcase-7735.restdb.io/rest/useraccounts/" + userID, false);
  httpclient.setRequestHeader("x-apikey", "1368977aab130f9a6e6ec87cbb08c152ad458");
  httpclient.send();
  
  try{
    var response = httpclient.response;
    return response.Email;
    
  } catch(err){
    alert(err.message);
  }
}
//onTouchEnd: setGlobalTrip(response[i]._id)