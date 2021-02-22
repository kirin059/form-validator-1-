const form = document.querySelector("#form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

const small = document.querySelector("small");

// Show input "error message"
function showError(input, message) {
    console.log(input.parentElement);
    const formControl = input.parentElement;

    formControl.className = "form-control error";
    small.innerText = message;
}

// Show input "success outline"
function showSuccess(input) {
    const formControl = input.parentElement;

    formControl.className = "form-control success";
}

/////////////////////

// Check email is valid
function checkEmail(input) {
    if (email.value.includes("@")) {
        showSuccess(input);
    } else {
        showError(input, "Email is not valid");
    }
}

// Get fieldname
// function getFieldName(input) {
//     return input.id.charAt(0).toUpperCase() + input.id.slice(1);
// }

// Check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

// Check required fields
// function checkRequired(inputArr) {
//     let isRequired = false;

//     inputArr.forEach(function (input) {
//         if (input.indexOf() !== -1) {
//             showError(input, `${getFieldName(input)} is required`);
//             isRequired = true;
//         } else {
//             showSuccess(input);
//         }
//     });

//     return isRequired;
// }

// Check passwords match
function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, "Passwords do not match");
    }
}

// Event listeners
form.addEventListener("submit", function (e) {
    // console.log(e.target);
    // e.preventDefault();

    checkLength(username, 3, 10);
    checkLength(password, 6, 25);
    checkEmail(input);
    checkPasswordsMatch(password, password2);
});
