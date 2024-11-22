
function LoadMainNavigation() {
  const htmlCode = `
      <div class="NavBar fa-solid fa-1x">
        <div id="Logo"></div>
        <div class="RightTopLinks" id="Links">
          <a href="https://sendog6913.github.io/Zepol" target="_parent" class="active">Home</a>
          <a href="#" target="_self">Contact</a>
          <a href="cv.html" target="_self">My CV</a>
          <a href="resources.html" target="_self">Resources</a>
          <a href="javascript:void(0);" class="icon" onclick="ResponsiveNav()">
            <i class="fa fa-bars"></i>
          </a>
        </div>
      </div>
  `;

  // Get the target element where you want to insert the HTML
  const targetElement = document.getElementById('NavBarTarget'); 

  // Insert the HTML code into the target element
  targetElement.innerHTML = htmlCode; 
}

  function ResponsiveNav() {
    var x = document.getElementById("Links");
    if (x.className === "RightTopLinks") {
      x.className += " responsive";
    } else {
      x.className = "RightTopLinks";
    }
  }

// Simple Scripts to practice 
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}