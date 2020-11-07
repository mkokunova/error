// I'm writing in the presence of the glass which is on the table in front of me, 2 sm away from the sheet of paper I'm writing on.
// Near there is a lamp on the wall. The light is on.

var myDate = "10/30/2020 15:51:00";
var inRoom = ['Lamp', 'Table', 'Glass', 'whitePaper'];
var LEVEL = 'DEBUG';

function turnLight(thing, state){
        if (state == 'on') {
        return thing + " is on";
    } else {
        return thing + ' is off';
    }
}

function toTimestamp(strDate){
   var datum = Date.parse(strDate);
   return datum/1000;
}

function log(...params){
    if (LEVEL == 'DEBUG') {
           var j = 'DEBUG ';
    } else {
       var j = 'INFO';
    }
    for (i=0; i<params.length; i++) {
    j += (params[i])
  }
        return j;
}


document.write(log(toTimestamp(myDate).toString(), turnLight(inRoom[0],'on'), ' List in Room: ', inRoom));
