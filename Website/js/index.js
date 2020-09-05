function hamburgerToggle() { //There is a bug with this, need to fix it
  var e = document.getElementById("navbar-list");
  if (e.style.display === "block") {
    e.style.display = "none";
  } else {
    e.style.display = "block";
  }
}

//Allows the user to click ourside the nav menu (when open on mobile) to close it
window.addEventListener('click', function(e){
  console.log(window.innerWidth);
    if ((!document.getElementById('navbar-main').contains(e.target)) && window.innerWidth <= 991) {
     document.getElementById('navbar-list').style.display = "none";
  }
})
