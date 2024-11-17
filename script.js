function save() {
  event.preventDefault();

  let firstName = document.querySelector("input[name='name']").value;
  let lastName = document.querySelector("input[name='lastName']").value;
  let email = document.querySelector("input[name='email']").value;
  let queryType = document.querySelector("input[name='query']:checked");
  let textarea = document.getElementById("text").value;
  let contract = document.querySelector("input[name='ckeckbox']").checked;

  // if (firstName == "") {
  //   // errorName.style.display = "flex";
  //   firstName.setAttribute('class',"redInput");
  // }
  validation(firstName, lastName, email, queryType, textarea, contract);
  console.log(firstName, lastName, email, queryType.value, textarea, contract);
}

function validation(firstName, lastName, email, queryType, textarea, contract) {
  let errorName = document.getElementById("errorName");
  let errorLast = document.getElementById("errorLast");
  let errorEmail = document.getElementById("errorEmail");
  let validEmail = document.getElementById("validEmail");
  let errorRadio = document.getElementById("errorRadio");
  let errorMessage = document.getElementById("errorMessage");
  let errorCheck = document.getElementById("errorCheck");

  // firstName.setAttribute('class', "redInput")
  firstName.className += "redInput";

  if (firstName == "") {
    errorName.style.display = "flex";
    // email.setAttribute('class',"redInput");
  } else {
    errorName.style.display = "none";
  }

  lastName == ""
    ? (errorLast.style.display = "flex")
    : (errorLast.style.display = "none");

  email == ""
    ? (errorEmail.style.display = "flex")
    : IsEmail(email) == true
    ? (errorEmail.style.display = "none") && (validEmail.style.display = "none")
    : (validEmail.style.display = "flex") &&
      (errorEmail.style.display = "none");

  queryType == null
    ? (errorRadio.style.display = "flex")
    : (errorRadio.style.display = "none");

  textarea == ""
    ? (errorMessage.style.display = "flex")
    : (errorMessage.style.display = "none");

  contract == ""
    ? (errorCheck.style.display = "flex")
    : (errorCheck.style.display = "none");

  if (
    firstName != "" &&
    lastName != "" &&
    email != "" &&
    queryType != null &&
    textarea != "" &&
    contract != false
  ) {
    submit();
    cleanForm();
  }
}

function IsEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function cleanForm() {
  document.querySelector("input[name='name']").value = "";
  document.querySelector("input[name='lastName']").value = "";
  document.querySelector("input[name='email']").value = "";
  document.querySelector("input[name='query']").checked = null;
  document.getElementById("text").value = "";
  document.querySelector("input[name='ckeckbox']").checked = false;
}

function submit() {
  // alert(`Message Sent! <br> `)
  Swal.fire({
    position: "top",
    icon: "success",
    // titleText: "ola",
    title: "Thanks for completing the form. We'll be in touch soon!",
    showConfirmButton: false,
    timer: 1500,
  });
}
