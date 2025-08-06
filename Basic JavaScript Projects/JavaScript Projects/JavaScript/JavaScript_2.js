function validateForm() {
  let x = document.forms["myForm"]["firstname"].value;
  if (x == "") {
    alert("All fields must be filled out");
    return false;
  }
}
