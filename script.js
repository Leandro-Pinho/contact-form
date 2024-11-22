const firstName = document.querySelector("input[name='name']");
const lastName = document.querySelector("input[name='lastName']");
const email = document.querySelector("input[name='email']");
const textarea = document.getElementById("text");
const contract = document.querySelector("input[name='ckeckbox']");
const queryType = document.querySelector("input[name='check']:checked");

function save() {
  event.preventDefault();

  checkInputs();
  validateCheck();
}

function checkInputs() {
  const firstNameValue = firstName.value;
  const lastNameValue = lastName.value;
  const emailValue = email.value;
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


  if (
    firstNameValue != "" &&
    lastNameValue != "" &&
    emailValue != "" &&
    textareaValue != "" &&
    contractValue != false
  ) {
    // cleanForm();
    MessageSuccess();
  }
}
console.log(queryType)

function validateCheck() {
  var errorCheck = document.getElementById("error_check");

  var check = document.getElementById("form").query,
    isChecked = false,
    i;

  for (i = 0; i < check.length; i += 1) {
    if (check[i].checked) {
      errorCheck.style.display = "none";
      isChecked = true;
      break;
    }
  }

  if (!isChecked) {
    errorCheck.style.display = "block";
    errorCheck.style.color = "hsl(0, 66%, 54%)"
    errorCheck.innerText = "this field is required";
    return false;
  }
  return true;
}



var tablinks = document.getElementsByClassName("tab-links")

function opentab() {
    for (tablink of tablinks) {
        tablink.classList.remove("radioIn");
    }
    event.currentTarget.classList.add("radioIn"); 
}


function setErrorFor(input, message) {
  const formControlInput = input.parentElement;
  const small = formControlInput.querySelector("small");

  small.style.display = "flex";
  small.innerText = message;

  formControlInput.className = "form-control form-controlInput error";
}

function setSuccessFor(input) {
  const formControlInput = input.parentElement;
  const small = formControlInput.querySelector("small");

  small.style.display = "none";

  formControlInput.className = "form-control form-controlInput success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function cleanForm() {
  document.querySelector("input[name='name']").value = "";
  document.querySelector("input[name='lastName']").value = "";
  document.querySelector("input[name='email']").value = "";
  document.querySelector("input[name='query']").checked = null;
  document.getElementById("text").value = "";
  document.querySelector("input[name='ckeckbox']").checked = false;
}

function MessageSuccess() {
  // alert(`Message Sent! <br> `)
  Swal.fire({
    position: "top",
    icon: "success",
    // titleText: "ola",
    title: "Thanks for completing the form. We'll be in touch soon!",
    showConfirmButton: false,
    timer: 2500,
  });

  setTimeout(() => {
    window.location.reload(true)
  }, "2500");
  
}
