//Type your code here

var userID;

//when the login button is pressed
function login() {
  //Get the form that this function is called from to use the corresponding item IDs
  var form = kony.application.getCurrentForm();
  //for each of the items, put them in a variable
  var emailTxt = form.loginemailinput.text;
  var passTxt = form.loginpasswordinput.text;
   //kony.ui.Alert({message: passText}, {});
  
  //try to connect to the database
  //1. create a request to the database
  var httpclient = new kony.net.HttpRequest();
  httpclient.open(constants.HTTP_METHOD_GET, "https://littlesuitcase-7735.restdb.io/rest/useraccounts", false);
  httpclient.setRequestHeader("x-apikey", "1368977aab130f9a6e6ec87cbb08c152ad458");
  try {
    httpclient.send();
    var response = httpclient.response;
    //to check the data from db
   // kony.ui.Alert({message: passTxt}, {});
    
    //var userId = response[0];
    for (var i in response) {
      if (emailTxt == response[i].Email && passTxt== response[i].Password) {
        setUserID(response[i]._id);
      }
    }
    
    
    //kony.ui.Alert({message: userId}, {});
  } catch (err) {
    kony.ui.Alert({message: err + "from catch block"}, {});
  }
}

function getUserID() {
  return userID;
}

function setUserID(str) {
  userID = str;
}