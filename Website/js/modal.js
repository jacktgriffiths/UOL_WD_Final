


function modal(element_id) {

var modal = document.getElementById("modal_id"); //finds the modal element

var img = document.getElementById(element_id); //gets the image from the element
var modalImg = document.getElementById("img01"); //finds the modal image
var captionText = document.getElementById("caption"); //gets the image from the caption text
img.onclick = function(){ //if you click the function, it sets the modal display to block so it shows
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on x, close the modal
span.onclick = function() {
  modal.style.display = "none";
}
}
