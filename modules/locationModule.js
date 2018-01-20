function getRandomLocation() {
  //Get the current user ID
  var form = kony.application.getCurrentForm();
  var response;
  var rand;
  
  //Connect to database
  var httpClient = new kony.net.HttpRequest();
  httpClient.open(constants.HTTP_METHOD_GET, "https://littlesuitcase-7735.restdb.io/rest/trips", false);
  httpClient.setRequestHeader("x-apikey", "1368977aab130f9a6e6ec87cbb08c152ad458");

  try {
    httpClient.send();
    response = httpClient.response;
    var list = [];

    for (var i in response) {
      list.push(response[i]);
    }

    //Randomize location suggestions
    rand = list[Math.floor(Math.random() * list.length)];
    
    //Once selected, post related info to these text boxes
    form.LocationName.text = rand.Destination;
    form.LanguageText.text = rand.Language;
    form.CurrencyText.text = rand.Currency;
    form.PopTransportationText.text = rand.PopTransportation;
    form.FoodText.text = rand.Food;
    form.DrinkText.text = rand.Drink;

    //Post location photo that correlates with location
    var photoID = rand.Photo[0];
    form.LocationImage.src = "https://littlesuitcase-7735.restdb.io/media/" + photoID;
    setMap(rand.Lat, rand.Long, rand.Destination);

  } catch (err){
    alert(err.msg);
  }
  
  //API key for suggested location info for weather
  var location = rand.Destination;

  var url = "http://api.openweathermap.org/data/2.5/weather?q=" + encodeURIComponent(location) +
      "&units=metric&APPID=03940809e404db66b5955f23e2af2e4a";

  var httpClient2 = new kony.net.HttpRequest();
  
  //Checks info pulled
  try{	
    httpClient2.onReadyStateChange = weatherResponse;
    httpClient2.ResponseType = constants.HTTP_RESPONSE_TYPE_TEXT;
    httpClient2.open(constants.HTTP_METHOD_GET, url, false);
    httpClient2.send();
  }
  catch(err){
    alert(err.msg);

  }
}

function weatherResponse() {
  //Checks that pulled info reaches 200
  if (this.status == 200) {
    try {
      var jsonString = JSON.stringify(this.response);
      var jsonObj = JSON.parse(jsonString);
	  
      //Pull and post only these topics to textbox
      kony.application.getCurrentForm().WeatherData.text = 
        "Now: " + jsonObj.main.temp + 
        ", Low: " + jsonObj.main.temp_min + 
        ", High: " + jsonObj.main.temp_max; 
    } catch(err) {
      alert(err.msg);
    }
  }
}

function setMap(lat, long, name){
  //Uses lat and long of suggested trip info to create map
  var form = kony.application.getCurrentForm();
  var locationData = {lat: lat,lon: long, name: name ,desc: ""};
  var map = form.CityMap.navigateToLocation(locationData, true, true);
}

//Defining the shake event handler function
function onshake(){
  kony.print("Shake called");
}

function registerAccelerationEvents()
{
  //Register acceleration events.	
  //Define the event object.
  var events = {shake:onshake};

  //Register the shake event handler function.
  kony.accelerometer.registerAccelerationEvents(events);
}


