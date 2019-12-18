var div = document.getElementById("blueCircle");
// change color of circle to blue when button was clicked
function color() {
  div.setAttribute("id","blueCircle");
}
// change color of circle to red when button was clicked
function red() {
  div.setAttribute("id","redCircle");
}

// change background color when button was clicked
var backgroundColor = ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#9e9e9e", "#607d8b"];
var i = 0;
document.getElementById("backgroundBtn").addEventListener("click", function(){
  // i++ would change the color only once
  i = i < backgroundColor.length ? ++i : 0;
  document.querySelector("body").style.background = backgroundColor[i];
})
