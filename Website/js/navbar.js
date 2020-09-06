function hamburgerToggle() { //There is a bug with this, need to fix it
  var e = document.getElementById("navbar-list"); //get the navbar element
  if (e.style.display === "block") {
    e.style.display = "none";
  } else {
    e.style.display = "block";
  }
}

//Allows the user to click outside the nav menu (when open on mobile) to close it
window.addEventListener('click', function(e){
  console.log(window.innerWidth); //for debugging
    if ((!document.getElementById('navbar-main').contains(e.target)) && window.innerWidth <= 991) { //get the navbar and check that the click wasnt inside it and also that the screen is smaller than 991px (otherwise it runs even when the hamburger isnt there)
     document.getElementById('navbar-list').style.display = "none"; //hide the menu
  }
})
