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

function fromSuggestion(){
  var previousForm = kony.application.getPreviousForm();
  if(previousForm.id == "TripForm") {
    var destination = previousForm.LocationName.text;
    var form = kony.application.getCurrentForm();
    form.destinationinput.text = destination;
  }
}

function test() {
  var lblLayout ={containerWeight:50, padding:[5,5,5,5], margin:[5,5,5,5], hExpand:true, vExpand:false};
  var lblLayout2 ={renderAsAnchor:true, wrapping:constants.WIDGET_TEXT_WORD_WRAP};
  
  var labelText = "This is a test label";
  var lblBasic = {id:"test_id", text:labelText, isVisible:true};
  
  var lbl = new kony.ui.Label(lblBasic, lblLayout, lblLayout2);
  var y = 100;
  lbl.centerY = y + "px";
  this.view.add(lbl);
  
  //Defining properties for a Segment.
  var basicConf ={id:"segId", isVisible:true, widgetSkin:"widSkin", rowSkin:"rowSkn", rowFocusSkin:"rowFSkn", alternateRowSkin:"altSkin", sectionHeaderSkin:"secHSkin", widgetDataMap:{widgetId1:"dataid1", widgetId2:"dataId2", widgetId3:"dataId3" ,widgetId4:"secDataId1" ,widgetId5:"secDataId2" }, rowTemplate:box1};
  var layoutConf ={padding:[5,5,5,5], margin:[5,5,5,5], containerWeight:100};
  var pspConf ={border:constants.SEGUI_BORDER_TOP_ONLY, defaultSelection:true};

//Creating the Segment
	var segment = new kony.ui.SegmentedUI2(basicConf, layoutConf, pspConf);
  this.view.add(segment);
}