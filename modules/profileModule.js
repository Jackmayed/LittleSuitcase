//Type your code here
function saveProfile() {
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

function getEmail(userID) {
  var httpClient = new kony.net.HttpRequest();
 	 httpClient.open(constants.HTTP_METHOD_GET, "https://littlesuitcase-7735.restdb.io/rest/useraccounts" + "/" + userID, false);
 	 httpClient.setRequestHeader("x-apikey", "1368977aab130f9a6e6ec87cbb08c152ad458");
  
  
  try {
    httpClient.send();
    var response = httpClient.response;
    return response.Email;
  } catch(err) {
    
  }
  
}

function getProfile(){
  var userID = getUserID();
  var httpClient = new kony.net.HttpRequest();
 	 httpClient.open(constants.HTTP_METHOD_GET, "https://littlesuitcase-7735.restdb.io/rest/useraccounts" + "/" + userID, false);
 	 httpClient.setRequestHeader("x-apikey", "1368977aab130f9a6e6ec87cbb08c152ad458");
   try {
    httpClient.send();
    var response = httpClient.response;
    var textBox = {id: "ProfileName", text: response.Name, isVisible: true};
     kony.application.getCurrentForm().ProfileName.text = "response.Name";
  } catch(err) {
    kony.ui.Alert({message: err + "from getProfile()"}, {});
  }
}




