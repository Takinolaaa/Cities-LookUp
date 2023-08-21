
//Checks if input value has cities and output them
function showcountry(){
//Variable stored from the json file
var countryarray = JSON.parse(data)
//Stored  users input
var requestedcountry = document.getElementById('countryinput').value
// Stored users input
var requestedsubcountry = document.getElementById('subcountryinput').value
// stores the cities of subcountry or country input
var textoutput1 = document.getElementById('countryoutput')
var textoutput2 = document.getElementById('subcountryoutput')
for (let c of countryarray){
//Holds the key values of the object literals in the JSON file
var cou = c.country 
var na = c.name
var sub = c.subcountry
//Prints the cities if it is a value in the JSON file
if ( cou == requestedcountry){

    textoutput1.innerHTML += `${na} \n`;
}

//Prints the cities if it is a value in the JSON file
if (   sub == requestedsubcountry){
        
        textoutput2.innerHTML += `${na} \n`;
    
    }

} 

}


//Outputs the respected country and subcountry of given city value
function showcity(){
//Variable stored from the JSON file
var cityarray = JSON.parse(data)
var requestedcity =  document.getElementById('cityinput').value
var textoutput3 = document.getElementById('cityoutput')
for (let c of cityarray){

var cou = c.country 
var geo = c.geonameid 
var na = c.name
var sub = c.subcountry
//Prints the country/subcountry if city input is a value in the JSON file
if (na == requestedcity ){
     textoutput3.innerHTML = `${cou},  ${sub},  ${geo} \n`;
    
    
    }


}

}

//Makes the webpage responsive 
function init(){

//
    var button1 = document.getElementById('btn1')
    //activates function
    button1.addEventListener("click", showcountry)

//
    var button2 = document.getElementById('btn2')
    
    //activates function
    button2.addEventListener("click", showcity)

}

//Allows the buttons on the page to be responsive
window.addEventListener('load', init)



