function getRandomLocation() {
  //get the current user ID
	var form = kony.application.getCurrentForm();
  	var response;
  
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
    
    	var rand = list[Math.floor(Math.random() * list.length)];
	    form.LocationName.text = rand.Destination;
    	form.LanguageText.text = rand.Language;
	    form.CurrencyText.text = rand.Currency;
    	form.PopTransportationText.text = rand.PopTransportation;
    	form.FoodText.text = rand.Food;
    	form.DrinkText.text = rand.Drink;
    	
      	var photoID = rand.Photo[0];
    	form.LocationImage.src = "https://littlesuitcase-7735.restdb.io/media/" + photoID;
    	setMap(rand.Lat, rand.Long, rand.Destination);
      
      getWeather(rand);
      
	} catch (err){
		kony.ui.Alert({message: err}, {});
	}
}


function getWeather(city) {
  var location = city.Destination;
        kony.ui.Alert({message: location}, {});
  var url = "api.openweathermap.org/data/2.5/weather?q=" + location +
      	"&units=metric&APPID=03940809e404db66b5955f23e2af2e4a";
  var httpClient = new kony.net.HttpRequest();
  	httpClient.onReadyStateChange = getWeatherResponse;
	httpClient.ResponseType = constants.HTTP_RESPONSE_TYPE_TEXT;
  	httpClient.open(constants.HTTP_METHOD_GET, url, false);
  	httpClient.send();
}

function getWeatherResponse() {
  if (this.status == 200) {
        try {
          var jsonString = JSON.stringify(this.response);
          var jsonObj = JSON.parse(jsonString);
          kony.ui.Alert({message: jsonObj.main.temp}, {});
            //watch out for the TEXTAREA0
          form.Weatherinput.text = "Now: " + jsonObj.main.temp; /*+ 
            ", Low: " + jsonObj.main.temp_min + 
            ", High: " + jsonObj.main.temp_max; */
       	} catch(err) {
              kony.ui.Alert({message: "butt" + err}, {});

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


