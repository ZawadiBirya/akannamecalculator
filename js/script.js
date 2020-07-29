var femaleakannames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
var maleakannames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
var dayoftheweek = ['Sunday' , 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var gender = document.getElementById("gender");
var dob = document.getElementById("bday");
dob = new Date(dob);
weekday = dob.getDay();

function Submitdata () {
if (gender == female && weekday == dayoftheweek[0]) {
document.getElementById("result").innerHTML = "Your Akan name is" + femaleakannames[0];
}
event.preventDefault();
     }
