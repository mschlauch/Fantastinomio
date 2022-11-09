var synth = window.speechSynthesis;

var inputForm = document.querySelector('form');
var inputTxt = document.querySelector('.txt');
var voiceSelect = document.querySelector('select');



var voices = [];


function getLanguageTags() {
  let langs = ["ar-Arabic","cs-Czech","da-Danish","de-German","de-Deutsch","el-Greek","en-English","eo-Esperanto","es-Spanish","et-Estonian","fi-Finnish","fr-French","he-Hebrew","hi-Hindi","hu-Hungarian","id-Indonesian","it-Italian","it-Italiano","ja-Japanese","ko-Korean","la-Latin","lt-Lithuanian","lv-Latvian","nb-Norwegian Bokmal","nl-Dutch","nn-Norwegian Nynorsk","no-Norwegian","pl-Polish","pt-Portuguese","pt-Português","ro-Romanian","ru-Russian","sk-Slovak","sl-Slovenian","sq-Albanian","sr-Serbian","sv-Swedish","th-Thai","tr-Turkish","zh-Chinese"];
  let langobjects = [];
  for (let i=0;i<langs.length;i++) {
    let langparts = langs[i].split("-");
    langobjects.push({"code":langparts[0],"name":langparts[1]});
  }
  return langobjects;
}


function reproduce_speech(utterance, language){
  
  //utterance = utterance.replace("'","");
  
  var languagecode = language;
let languagetags = getLanguageTags()
for ( var index=0; index<languagetags.length; index++ ) {
  //  if ( language.localeCompare(languagetags[index].name, "en", { sensitivity: 'accent' })) 
  if (language.toLowerCase() == languagetags[index].name.toLowerCase())
  {
            languagecode = languagetags[index].code;
            console.log("found language code "+ languagecode);
    }
}

language = languagecode;
  
  event.preventDefault();
var text = utterance;

/*if (language.length > 2){
var languagecode = language.substring(0, 2).toLowerCase();
}
else {
var languagecode = language.toLowerCase();
}*/
 
  voices = synth.getVoices(); ;
 
  
    var utterThis = new SpeechSynthesisUtterance(text);
    
    for(i = 0; i < voices.length ; i++) {
      if(voices[i].lang.includes(languagecode)) {
        utterThis.voice = voices[i];
      }
    }
    utterThis.pitch = 1;
    utterThis.rate = 1;
    synth.speak(utterThis);
  
    
}


