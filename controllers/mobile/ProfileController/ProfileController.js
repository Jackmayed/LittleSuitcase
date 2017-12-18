/*define({ 
 //Type your controller code here 
  
});

*/

function loadDatabase() {
	//create a connection to the service providing the database
    var httpclient = new kony.net.HttpRequest();
    //open this connection with a specific type: GET or POST, leave the last param as false
    httpclient.open(constants.HTTP_METHOD_GET, "https://littlesuitcase-7735.restdb.io/rest/useraccounts", false);
  	//set the header for the HTTP request, this will not have to change
  	httpclient.setRequestHeader("x-apikey", "1368977aab130f9a6e6ec87cbb08c152ad458");
  	try {
      httpclient.send();
      var response = httpclient.response;
      
      var nationality;
      var age;
      var birthdate;
      var luggage;
      var photo;
      
      for (var profile in response) {
        for (var i in profile) {
          if (i == "Nationality") nationality = profile[i];
          if (i == "Age") age = profile[i];
          if (i == "Birthdate") birthdate = profile[i];
          if (i == "Luggage Description") luggage = profile[i];
          if (i == "Photo") photo = profile[i];
        }
        //assign the variables to the UI
        var txtNation = {id: "Nationality", text: nationality, isVisibile: true};
        var txtBoxNation = new kony.ui.TextBox(txtNation, layoutProperties, platformSpecificProperties);
        this.view.add(txtBoxNation);
      }
    } 
  	catch(err) {
    //show a message with the error
    }
 }

/*{
    "AS_Button_dc69c43b932341c18892e66d7916fcb1"; {
        "id": "AS_Button_dc69c43b932341c18892e66d7916fcb1",
        "type": "ACTION_SEQUENCE",
        "params": [{
            "datatype": "collection",
            "name": "eventobject"
        }],
        "contextObj": {
            "name": "Form1",
            "type": "forms",
            "platform": "",
            "KUID": "b52ef5bd9c9b4c13a0dc36ca317ad36f"
        },
        "language": "js",
        "actions": [{
            "id": "INVOKE_FUNCTION___hcfdbda095e44d839f16a2a0e9663200",
            "type": "INVOKE_FUNCTION",
            "sequenceKUID": "loadDatabase",
            "display": "loadDatabase",
            "inputparams": [],
            "parentId": null,
            "callbackType": null,
            "disabled": null,
            "source": "module"
        }]
    }
}
*/