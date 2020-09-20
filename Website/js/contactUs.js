//this code will check that all the fields are filled in in the contact form

function checkFormValidation() {
  //pull all the data from each field and store it in a variable respectively
  var name = document.forms["contact-form"]["name"].value;
  var message = document.forms["contact-form"]["message"].value;
  var email = document.forms["contact-form"]["email"].value;
  var subject = document.forms["contact-form"]["subject"].value;

  if (name == "" || message == "" || email == "" || subject == "") { //check if any of the fields are empty and if they are prompt the user
    alert("You have not filled out all of the fields!");
    return false;

  } else { //if all fields are filled out send the message
    alert("Message sent successfully!")
    return true;
  }
}
