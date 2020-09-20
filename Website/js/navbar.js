function hamburgerToggle() { //this hides or shows the hamburger button
  var e = document.getElementById("navbar-list");
  if (e.style.display === "block") {
    e.style.display = "none";
  } else {
    e.style.display = "block";
  }
}

//Allows the user to click ourside the nav menu (when open on mobile) to close it instead of having to click the hamburger again
window.addEventListener('click', function(e){
    if ((!document.getElementById('navbar-main').contains(e.target)) && window.innerWidth <= 991) { //checks if the click is inside the navbar, if its not it hides the navbar
     document.getElementById('navbar-list').style.display = "none";
  }
})
