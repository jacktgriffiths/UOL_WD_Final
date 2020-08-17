function checkFormValidation() {
  var name = document.forms["contact-form"]["name"].value;
  var message = document.forms["contact-form"]["message"].value;
  var email = document.forms["contact-form"]["email"].value;
  var subject = document.forms["contact-form"]["subject"].value;

  if (name == "" || message == "" || email == "" || subject == "") {
    alert("You have not filled out all of the fields!");
    return false;

  } else {
    alert("Message sent successfully!")
  }
}
