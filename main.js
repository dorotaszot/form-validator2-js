const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Event listeners
form.addEventListener('submit', function (e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 6, 20);
  checkLength(password, 6, 20);
  checkPasswordsMatch(password, password2);
  checkEmailFormat(email)
})

// Check required fields
function checkRequired(inputArray) {
  inputArray.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`)
    } else {
      showSuccess(input);
    }
  })
}

// Get field name Capital letter
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Show error
function showError(input, message) {
  const formPart = input.parentElement;
  formPart.className = 'form-part error';
  const small = formPart.querySelector('small');
  small.innerText = message;
}

function showSuccess(input) {
  const formPart = input.parentElement;
  formPart.className = 'form-part success';
}

// Check length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} must be at least ${min} characters`)
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} must be less that ${max} characters`)
  } else {
    showSuccess(input);
  }
}

// Check passwords match
function checkPasswordsMatch(input, input2) {
  if (input.value !== input2.value) {
    showError(input2, `Passwords don't match`)
  }
}

// Check email format
function checkEmailFormat(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, `Email is not valid`);
  }
};
