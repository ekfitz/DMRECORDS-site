var topNav = document.getElementById("topNav");

var nb1 = document.getElementById("nb1");
var nb2 = document.getElementById("nb2");
var nb3 = document.getElementById("nb3");
var nb4 = document.getElementById("nb4");

var nt1 = document.getElementById("nt1");
var nt2 = document.getElementById("nt2");
var nt3 = document.getElementById("nt3");
var nt4 = document.getElementById("nt4");

var hamburger = document.getElementById("menuBox");
var line1 = document.getElementById("line1");
var line2 = document.getElementById("line2");
var line3 = document.getElementById("line3");

topNav.style.display = "none";

nb1.style.top = "-5vh";
nb2.style.top = "-5vh";
nb3.style.top = "-5vh";
nb4.style.top = "-5vh";

nb1.style.opacity = "0.7";
nb2.style.opacity = "0.7";
nb3.style.opacity = "0.7";
nb4.style.opacity = "0.7";

nt1.innerHTML = "SOUND";
nt2.innerHTML = "GEAR";
nt3.innerHTML = "RECENT";
nt4.innerHTML = "ABOUT";

nb1.onmouseover = highText;
nb1.onmouseout = regText;

nb2.onmouseover = highText;
nb2.onmouseout = regText;

nb3.onmouseover = highText;
nb3.onmouseout = regText;

nb4.onmouseover = highText;
nb4.onmouseout = regText;

line1.style.opacity = "0.7";
line2.style.opacity = "0.7";
line3.style.opacity = "0.7";

hamburger.onmouseover = highMenu;
hamburger.onmouseout = regMenu;

hamburger.onclick = showNav;

var hugePic = document.getElementById("hugePic");
hugePic.src = "images/logoPNG.png";

function highText() {
  this.style.color = "#FF5AFE";
  this.style.opacity = "1";
}

function regText() {
  this.style.opacity = "0.7";
  this.style.color = "white";
}

function highMenu() {
  line1.style.backgroundColor = "#FF5AFE";
  line2.style.backgroundColor = "#FF5AFE";
  line3.style.backgroundColor = "#FF5AFE";

  line1.style.opacity = "1";
  line2.style.opacity = "1";
  line3.style.opacity = "1";
}

function regMenu() {
  line1.style.opacity = "0.7";
  line2.style.opacity = "0.7";
  line3.style.opacity = "0.7";

  line1.style.backgroundColor = "white";
  line2.style.backgroundColor = "white";
  line3.style.backgroundColor = "white";
}

function showNav() {
  if (topNav.style.display == "none") {
    topNav.style.display = "block";
    nb1.style.top = "1%";
    nb2.style.top = "1%";
    nb3.style.top = "1%";
    nb4.style.top = "1%";

  } else {
    topNav.style.display = "none";
    nb1.style.top = "-5vh";
    nb2.style.top = "-5vh";
    nb3.style.top = "-5vh";
    nb4.style.top = "-5vh";

  }
}
