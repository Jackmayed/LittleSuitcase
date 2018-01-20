function saveProfile() {
  //get the current user ID
  var userID = getUserID();

  //connect variables to assigned textboxes
  var email = getEmail(userID);
  var name = kony.application.getCurrentForm().ProfileName.text;
  var nationality = kony.application.getCurrentForm().ProfileNationality.text;
  var age = kony.application.getCurrentForm().ProfileAge.text;
  var birthdate = kony.application.getCurrentForm().ProfileBirthdate.text;
  var luggage = kony.application.getCurrentForm().ProfileLuggage.text;

  //any profile edits on app will be changed in the database
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
    alert("Request Unavailable");
  }

}

function getEmail(userID) {
  //Pulls email from API key to link database
  var httpClient = new kony.net.HttpRequest();
  httpClient.open(constants.HTTP_METHOD_GET, "https://littlesuitcase-7735.restdb.io/rest/useraccounts" + "/" + userID, false);
  httpClient.setRequestHeader("x-apikey", "1368977aab130f9a6e6ec87cbb08c152ad458");


  try {
    httpClient.send();
    var response = httpClient.response;
    return response.Email;
  } catch(err) {
    alert("Email not found");
  }

}

function getProfile(){
  //Obtain user info from database that pertains to email used in login
  var userID = getUserID();
  var httpClient = new kony.net.HttpRequest();
  httpClient.open(constants.HTTP_METHOD_GET, "https://littlesuitcase-7735.restdb.io/rest/useraccounts" + "/" + userID, false);
  httpClient.setRequestHeader("x-apikey", "1368977aab130f9a6e6ec87cbb08c152ad458");
  
  //Places pulled info into correct profile text boxes
  try {
    httpClient.send();
    var response = httpClient.response;
    var photoID = response.Photo[0];
    var form = kony.application.getCurrentForm();

    form.ProfileNationality.text = response.Nationality;
    form.ProfileAge.text = response.Age;
    form.ProfileBirthdate.text = response.Birthdate;
    form.ProfileLuggage.text = response.Luggage;
    form.ProfileName.text = response.Name;
    form.ProfileImage.src = "https://littlesuitcase-7735.restdb.io/media/" + photoID;
  } catch(err) {
    alert("Profile not obtained");
  }
}




