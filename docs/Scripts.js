// Simple Scripts to practice 
function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
  }

function ResponsiveNav() {
  var x = document.getElementById("Links");
  if (x.className === "RightTopLinks") {
    x.className += " responsive";
  } else {
    x.className = "RightTopLinks";
  }
}