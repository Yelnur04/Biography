const audio = new Audio();
audio.src = "./qwe.mp3";

const aud = new Audio();
aud.src = "./bankai.mp3";

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
function mouseOver() {
  document.getElementById("butt").style.color = "red";
}

function mouseOut() {
  document.getElementById("butt").style.color = "black";
}
function myFunction() {
  document.getElementById("demo").style.backgroundColor = "#676FA3";
}
