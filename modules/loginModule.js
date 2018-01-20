var userID;

//When the login button is pressed
function login() {
  //Get the form that this function is called from to use the corresponding item IDs
  var form = kony.application.getCurrentForm();
  //For each of the items, put them in a variable
  var emailTxt = form.loginemailinput.text;
  var passTxt = form.loginpasswordinput.text;
  
  //Try to connect to the database
  //1. create a request to the database
  var httpclient = new kony.net.HttpRequest();
  httpclient.open(constants.HTTP_METHOD_GET, "https://littlesuitcase-7735.restdb.io/rest/useraccounts", false);
  httpclient.setRequestHeader("x-apikey", "1368977aab130f9a6e6ec87cbb08c152ad458");
  try {
    httpclient.send();
    var response = httpclient.response;
    //To check the data from db
    
    for (var i in response) {
      if (emailTxt == response[i].Email && passTxt == response[i].Password) {
        setUserID(response[i]._id);
      }
    }
    
  } catch (err) {
    alert(Denied);
  }
}

function getUserID() {
  return userID;
}

function setUserID(str) {
  userID = str;
}