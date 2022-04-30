/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("navigation-overlay").style.width = "100%";
    document.getElementById("open-button").style.display = "none";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("navigation-overlay").style.width = "0%";
    document.getElementById("open-button").style.display = "block";
  }