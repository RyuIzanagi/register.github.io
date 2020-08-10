const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show input succes message
function showSucces(input) {
    const formControl = input.parentElement;
    formControl.className= 'form-control success';
}

// Check email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSucces(input);

    } else {
        showError(input, 'Email is not valid');
    }
}

// Check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSucces(input);
        }

    });

}


// Check input Length
function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters` );
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showSucces(input);
    }
}

// Check Passwords match
function checkPasswordsMatch(input1, input2) {
if(input1.value !== input2.value) {
    showError(input2, 'Passwords do not match')
} else if (input2.value ==='') {
    showError(input2, 'Confirm your password')
}
}

// Get fieldname
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


// Event Listeners
form.addEventListener('submit', function(e){
   e.preventDefault();

   checkRequired([username, email, password]);
   checkLength(username, 4, 16);
   checkLength(password, 8, 24);
   checkEmail(email);
   checkPasswordsMatch(password, password2);


 

});