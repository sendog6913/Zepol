
function LoadMainNavigation() {
  const htmlCode = `
      <div class="NavBar fa-solid fa-1x">
        <div id="Logo"></div>
        <div class="RightTopLinks" id="Links">
          <a href="https://sendog6913.github.io/Zepol" target="_parent" class="active">Home</a>
          <a href="cv.html" target="_self">My CV</a>
          <a href="resources.html" target="_self">Resources</a>
          <a href="portfolio.html" target="_self">Portfolio</a>
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


function LoadMainFooter() {
    const htmlCode = `
        <div class="footer">
          <p style="text-align: center;">&copy; Zepol's Portfolio by David Lopez Jr. <a href="https://www.linkedin.com/in/davidlopezjr" target="_blank" title="David Lopez Jr.'s LinkedIn Profile"><i class="fa-brands fa-linkedin fa-regular fa-lg" style="color: whitesmoke"></i></a> </p>
        </div>
      `;
  
    // Get the target element where you want to insert the HTML
    const targetElement = document.getElementById('FooterTarget'); 
  
    // Insert the HTML code into the target element
    targetElement.innerHTML = htmlCode; 
}

// Simple Scripts to practice 
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}