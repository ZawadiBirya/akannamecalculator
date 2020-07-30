
var femaleAkanNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
var maleAkanNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
var weekDays = ['Sunday' , 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function submit() {
event.preventDefault();
var gender = document.getElementById("gender");
var date = document.getElementById("date");
date = new Date(date);
weekDay = date.getDay();

if (theGender === "male") {
document.getElementById("result").innerHTML = "Your Akan name is" + maleAkanNames[date.getDay()];
} else if (theGender === "female") {
document.getElementById("result").innerHTML = "Your Akan name is" + femaleAkanNames[date.getDay()];
} else {
document.getElementById("result").innerHTML = "invalid";
}
     }
