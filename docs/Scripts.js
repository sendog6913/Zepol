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

function loadHTMLFromFunction() {
  const htmlCode = `
    <div>
      <h2>Hello from JavaScript!</h2>
      <p>This content was loaded dynamically.</p>
    </div>
  `;

  // Get the target element where you want to insert the HTML
  const targetElement = document.getElementById('target'); 

  // Insert the HTML code into the target element
  targetElement.innerHTML = htmlCode; 
}