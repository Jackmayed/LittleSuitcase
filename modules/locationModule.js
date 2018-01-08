function getRandomLocation() {
  //get the current user ID
  var form = kony.application.getCurrentForm();
  var response;
  var rand;

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

    rand = list[Math.floor(Math.random() * list.length)];
    form.LocationName.text = rand.Destination;
    form.LanguageText.text = rand.Language;
    form.CurrencyText.text = rand.Currency;
    form.PopTransportationText.text = rand.PopTransportation;
    form.FoodText.text = rand.Food;
    form.DrinkText.text = rand.Drink;

    var photoID = rand.Photo[0];
    form.LocationImage.src = "https://littlesuitcase-7735.restdb.io/media/" + photoID;
    setMap(rand.Lat, rand.Long, rand.Destination);
    //getWeather();

  } catch (err){
    alert(err.msg);
  }
  //
  var location = rand.Destination;

  var url = "http://api.openweathermap.org/data/2.5/weather?q=" + encodeURIComponent(location) +
      "&units=metric&APPID=03940809e404db66b5955f23e2af2e4a";

  var httpClient2 = new kony.net.HttpRequest();
  //Changed the Type 
  try{	
    httpClient2.onReadyStateChange = weatherResponse;
    httpClient2.ResponseType = constants.HTTP_RESPONSE_TYPE_TEXT;
    httpClient2.open(constants.HTTP_METHOD_GET, url, false);
    httpClient2.send();
  }
  catch(err){
    //s s
    alert(err.msg);

  }
}


function weatherResponse() {
  //     alert(this.status); 
  if (this.status == 200) {
    //alert("trouble here");
    try {
      //      alert(this.response);
      var jsonString = JSON.stringify(this.response);
      var jsonObj = JSON.parse(jsonString);

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
  // Register acceleration events.	
  //Define the event object.
  var events = {shake:onshake};

  //Register the shake event handler function.
  kony.accelerometer.registerAccelerationEvents(events);
}


