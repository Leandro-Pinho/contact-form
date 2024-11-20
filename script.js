const firstName = document.querySelector("input[name='name']");
const lastName = document.querySelector("input[name='lastName']")
const email = document.querySelector("input[name='email']")
const textarea = document.getElementById("text")
const contract = document.querySelector("input[name='ckeckbox']")

function save() {
  event.preventDefault();
  
  checkInputs();
}

function checkInputs() {
  const queryType = document.querySelector("input[name='query']:checked");
  const firstNameValue = firstName.value;
  const lastNameValue = lastName.value;
  const emailValue = email.value;
  const queryTypeValue = queryType;
  const textareaValue = textarea.value;
  const contractValue = contract.checked;

  if (firstNameValue === "") {
    setErrorFor(firstName, "this field is required");
  } else {
    setSuccessFor(firstName);
  }

  if (lastNameValue === "") {
    setErrorFor(lastName, "this field is required");
  } else {
    setSuccessFor(lastName);
  }

  if (emailValue === "") {
    setErrorFor(email, "this field is required");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Please enter a valid email address");
  } else {
    setSuccessFor(email);
  }

  
  if (textareaValue === "") {
    setErrorFor(textarea, "this field is required");
  } else {
    setSuccessFor(textarea);
  }
  
  if (contractValue == false) {
    setErrorFor(contract, "this field is required");
  } else {
    setSuccessFor(contract);
  }

  if (queryType.value != 1 && queryType.value != 2) {
    setErrorFor(queryType, "this field is required");
  } else {
    setSuccessFor(queryType);
  }
}


function setErrorFor(input, message){
  const formControlInput = input.parentElement;
  const small = formControlInput.querySelector("small");

  small.style.display = "flex"
  small.innerText = message;

  formControlInput.className = "form-control form-controlInput error";
}

function setSuccessFor(input) {
  const formControlInput = input.parentElement;
  const small = formControlInput.querySelector("small");

  small.style.display = "none"

  formControlInput.className ="form-control form-controlInput success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
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
