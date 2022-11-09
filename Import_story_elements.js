
function Load_data_storyelements() {



var localjsonfile = "storyobjectdata.json";
return Load_from_local_json(localjsonfile);


//in alternative: load from published google spreadsheet via json (has to be published)
//var google_doc_id = "?"; //insert the public google sheet id
//var apikey = "?"; //insert your google api key
//var rangeset = "Foglio1!A1:M400"; //exchange "Foglio1" with right sheet name
//return Load_from_google_spreadsheet(google_doc_id, apikey, rangeset);


}


function Load_from_google_spreadsheet(doc_id, apikey, rangeset) {

//old API v 3.: var url = "https://spreadsheets.google.com/feeds/cells/" + doc_id + "/1/public/full?alt=json"

//new API v 4
var range = rangeset;
var url = "https://sheets.googleapis.com/v4/spreadsheets/" + doc_id + "/values/" + range + "?key=" + apikey ;

var request = new XMLHttpRequest();  
request.open("GET", url, false);   
request.send(null);  



// Retrived data from csv file content


var obj = JSON.parse(request.responseText); 

console.log(obj);

var length = obj.values.length;
var number_of_rows = length; //parseInt(obj.feed.entry[length-1].gs$cell.row);
console.log("max rows "+ number_of_rows);

var storyobjects = new Array;//new Array(number_of_rows).fill({title: "unloaded", imageurl: "unloaded"});
console.log(storyobjects);

var var_title;
var var_imageurl;
var var_imageCC;
var var_audio_url;
var var_language;
var var_category;

var current_row = 2;//first row to be imported, set 2 if there is title row

for (var i = current_row; i < length; i++) {
  var content = obj.values[i];
  console.log(content); 
  
 // var row = parseInt(obj.feed.entry[i].gs$cell.row);
 // var col = parseInt(obj.feed.entry[i].gs$cell.col);
 // console.log("row "+ row + " col " + col);
  var item = content[i];
  console.log("current item" + item); 
  
 // if (storyobjects[row].length < length) {
 // var prototype = {title: "", imageurl: ""};
 // storyobjects[row].push(prototype);
 // }
 
   //anytime row is changed, push the object info of last iteration to the array
  
  console.log(storyobjects);
  
  //new reset the variables
  var_title = "";
  var_imageurl = "";
  var_imageCC = "";
  var_audio_url = "";
  var_language = "";
  var_category = "";
  var_explore_text = "";
  var_explore_url = "";
  var_copyright_author = "";
  var_copyright_source = "";
  var_copyright_license = "";
  
  
  
  //problem: how to push objects into nested array? https://stackoverflow.com/questions/6254050/how-to-add-an-object-to-an-array
  
  
  
  
  
 // if (col == 1){
 // storyobjects.push({title: content});
 // console.log(storyobjects);
   var_title = content[0];
 // }
 // else if (col == 2){
 // storyobjects[row-1].imageurl = content;
 // storyobjects.push({imageurl: content});
   var_imageurl = content[1];
   
 // }
 // else if (col == 3){
  var_imageCC = content[2];

 // }
 // else if (col == 4){
  var_audio_url = content[3];

 // }
 // else if (col == 5){
  var_language = content[4];

 // }
 // else if (col == 6){
  var_category = content[5];
 // }
 // else if (col == 7){
  var_explore_text = content[6]; 
 // }
 // else if (col == 8){
  var_explore_url = content[7];
 // }
 // else if (col == 9){
  var_copyright_author = content[8];
 // }
 // else if (col == 10){
  var_copyright_source = content[9];
 // }
  //else if (col == 11){
  var_copyright_license = content[10];
 // }
  
 
  storyobjects.push({title: var_title, imageurl: var_imageurl, imageCC: var_imageCC, audio_url: var_audio_url, language: var_language, category: var_category, explore_text: var_explore_text, explore_url: var_explore_url, copyright_author: var_copyright_author, copyright_source: var_copyright_source, copyright_license: var_copyright_license});
}

//finish with last push to array, the last row




 //storyobjects[2].imageurl = "lfh";
  console.log(storyobjects);

//console.log(storyobjects);
//storyobjects[row]


 //var text2 = csvData[1][2];

//problem: array in json throws error, first stringify, https://stackoverflow.com/questions/14432165/uncaught-syntaxerror-unexpected-token-with-json-parse
//obj = JSON.stringify(request.responseText);

 
 //textout = obj.feed.entry[5].content.$t;
 //textout = obj[1][1]; //ok: gelernt: zwischen obj und 1 kommt kein PUNKT in arrays!
// textout = obj.feed.entry[0].content.$t
 
 
 
 //console.log(textout);
 
 
 return storyobjects;  
    // The function returns the product of p1 and p2
}


function Load_from_local_json(localjsonfile) {


//new API v 4
var range = "Foglio1!A1:M200";
//var url = "https://www.googleapis.com/v4/spreadsheets/" + doc_id + "/values/" + range + "?key=" + apikey ;

var url = localjsonfile;
//json variant


var request = new XMLHttpRequest();  
request.open("GET", url, false);   
request.send(null);  




var obj = JSON.parse(request.responseText); 

console.log(obj);

var length = obj.values.length;
var number_of_rows = length; //parseInt(obj.feed.entry[length-1].gs$cell.row);
console.log("max rows "+ number_of_rows);

var storyobjects = new Array;//new Array(number_of_rows).fill({title: "unloaded", imageurl: "unloaded"});
console.log(storyobjects);

var var_title;
var var_imageurl;
var var_imageCC;
var var_audio_url;
var var_language;
var var_category;

var current_row = 2;//first row to be imported, set 2 if there is title row

for (var i = current_row; i < length; i++) {
  var content = obj.values[i];
  console.log(content); 
  
 // var row = parseInt(obj.feed.entry[i].gs$cell.row);
 // var col = parseInt(obj.feed.entry[i].gs$cell.col);
 // console.log("row "+ row + " col " + col);
  var item = content[i];
  console.log("current item" + item); 
  
 // if (storyobjects[row].length < length) {
 // var prototype = {title: "", imageurl: ""};
 // storyobjects[row].push(prototype);
 // }
 
   //anytime row is changed, push the object info of last iteration to the array
  
  console.log(storyobjects);
  
  //new reset the variables
  var_title = "";
  var_imageurl = "";
  var_imageCC = "";
  var_audio_url = "";
  var_language = "";
  var_category = "";
  var_explore_text = "";
  var_explore_url = "";
  var_copyright_author = "";
  var_copyright_source = "";
  var_copyright_license = "";
  
  
  
  //problem: how to push objects into nested array? https://stackoverflow.com/questions/6254050/how-to-add-an-object-to-an-array
  
  
  
  
  
 // if (col == 1){
 // storyobjects.push({title: content});
 // console.log(storyobjects);
   var_title = content[0];
 // }
 // else if (col == 2){
 // storyobjects[row-1].imageurl = content;
 // storyobjects.push({imageurl: content});
   var_imageurl = content[1];
   
 // }
 // else if (col == 3){
  var_imageCC = content[2];

 // }
 // else if (col == 4){
  var_audio_url = content[3];

 // }
 // else if (col == 5){
  var_language = content[4];

 // }
 // else if (col == 6){
  var_category = content[5];
 // }
 // else if (col == 7){
  var_explore_text = content[6]; 
 // }
 // else if (col == 8){
  var_explore_url = content[7];
 // }
 // else if (col == 9){
  var_copyright_author = content[8];
 // }
 // else if (col == 10){
  var_copyright_source = content[9];
 // }
  //else if (col == 11){
  var_copyright_license = content[10];
 // }
  
 
  storyobjects.push({title: var_title, imageurl: var_imageurl, imageCC: var_imageCC, audio_url: var_audio_url, language: var_language, category: var_category, explore_text: var_explore_text, explore_url: var_explore_url, copyright_author: var_copyright_author, copyright_source: var_copyright_source, copyright_license: var_copyright_license});
}

//finish with last push to array, the last row



  console.log(storyobjects);

 
 return storyobjects;  
    // The function returns the product of p1 and p2
}


