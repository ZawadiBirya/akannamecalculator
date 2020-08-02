
var femaleAkanNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
var maleAkanNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
var weekDays = ['Sunday' , 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function toSubmit() {
//event.preventDefault();
//var male = document.getElementById("male");
//var female = document.getElementById("female");
var date = document.getElementById("date");
//var gender = gender.selectedIndex;
//date = new Date(date);
//weekDay = date.getDay();
var male = document.getElementById("result").innerHTML = gender.options[male];
var female = document.getElementById("result").innerHTML = gender.options[female];

if (gender === "male") {
document.getElementById("result").innerHTML = "Your Akan name is" + maleAkanNames[date.getDay()];
}
else if (gender === "female")
{
document.getElementById("result").innerHTML = "Your Akan name is" + femaleAkanNames[date.getDay()];
//} //else {
//document.getElementById("result").innerHTML = "Not valid";
}
     }

toSubmit();
