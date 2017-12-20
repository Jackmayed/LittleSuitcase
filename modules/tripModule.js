//Redo this to fit form function
function saveTrip() {
  //get the current user ID
  var userID = getUserID();
  	kony.ui.Alert({message: userID}, {});
  
  var email = getEmail(userID);
  var name = kony.application.getCurrentForm().ProfileName.text;
  var nationality = kony.application.getCurrentForm().ProfileNationality.text;
  var age = kony.application.getCurrentForm().ProfileAge.text;
  var birthdate = kony.application.getCurrentForm().ProfileBirthdate.text;
  var luggage = kony.application.getCurrentForm().ProfileLuggage.text;
  //var image = kony.application.getCurrentForm().ProfileImage.;
  	kony.ui.Alert({message: email}, {});
  var httpClient = new kony.net.HttpRequest();
 	 httpClient.open(constants.HTTP_METHOD_POST, "https://littlesuitcase-7735.restdb.io/rest/useraccounts" + "/" + userID, false);
 	 httpClient.setRequestHeader("x-apikey", "1368977aab130f9a6e6ec87cbb08c152ad458");
 	 httpClient.setRequestHeader("Content-Type", "application/json");
  var postdata = {
    "_id": userID,
    "Email" : email,
    "Name" : name, 
    "Nationality" : nationality,
    "Age" : age,
    "Birthdate" : birthdate,
    "Luggage Description" : luggage
  };
  try{
   httpClient.send(postdata); 
  }catch (err){
    kony.ui.Alert({message: err}, {});
  }
  
}

function getTrip(){
  var userID = getUserID();
  var httpClient = new kony.net.HttpRequest();
 	 httpClient.open(constants.HTTP_METHOD_GET, "https://littlesuitcase-7735.restdb.io/rest/useraccounts" + "/" + userID, false);
 	 httpClient.setRequestHeader("x-apikey", "1368977aab130f9a6e6ec87cbb08c152ad458");
   try {
    httpClient.send();
    var response = httpClient.response;
     //kony.ui.Alert({message:response.Name}, {});
    //var textBox = {id: "ProfileName", text: response.Name, isVisible: true};
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
  var form = kony.application.getCurrentForm();
  var departure = form.departureinput.text;
  var destination = form.destinationinput.text;
  var start = form.startcalendar.formattedDate; 
  var end = form.endcalendar.formattedDate;
  var assignedUser = getEmail(getUserID());
  
  kony.ui.Alert({message: "Start: " + start + ", End: " + end}, {});

  var httpclient = new kony.net.HttpRequest();
  	httpclient.open(constants.HTTP_METHOD_POST, "https://littlesuitcase-7735.restdb.io/rest/trips", false);
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
    kony.ui.Alert({message: err + " from createTrip() method"}, {});
  }
}

function getAllTrips(){
  var currentUser = getEmail(getUserID());
  
   var httpclient = new kony.net.HttpRequest();
  	httpclient.open(constants.HTTP_METHOD_GET, "https://littlesuitcase-7735.restdb.io/rest/trips", false);
  	httpclient.setRequestHeader("x-apikey", "1368977aab130f9a6e6ec87cbb08c152ad458");
  
//   var form = kony.application.getCurrentForm();
//   var tripSeg = form.tripSegment.masterData;
  
//   kony.ui.Alert({message: tripSeg}, {});
  
  
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
    
    kony.ui.Alert({message: tripIDs}, {});
  } catch(err) {
    kony.ui.Alert({message: err}, {});
  }
}