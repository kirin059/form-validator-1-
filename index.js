const form = document.querySelector("#form");
const username = document.getElementById("userName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//const small = document.querySelector("small");

// Show input "error message"
function showError(input, message) {
    console.log(input.parentElement);
    const formControl = input.parentElement;
    formControl.className = "form-control error";

    const small = formControl.querySelector("small"); // 지역변수로 선언해줘야 한다
    small.innerText = message;
}

// Show input "success outline"
function showSuccess(input) {
    const formControl = input.parentElement;

    formControl.className = "form-control success";
}

// 입력받은 값의 id이름(username, password, email 등)의 앞글자를 대문자로 바꿔서 출력
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Check email is valid
function checkEmail(input) {
    if (email.value.includes("@")) {
        showSuccess(input);
    } else {
        showError(input, "Email is not valid");
    }
}

// Check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

// Check required fields
function checkRequired(inputArr) {
    let isRequired = false;
    inputArr.forEach(function (input) {
        if (input.value.trim() === "") {
            // 값이 없으면
            showError(input, `${getFieldName(input)} is required`);
            isRequired = true;
        } else {
            showSuccess(input);
        }
    });

    return isRequired;
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, "Passwords do not match");
    }
}

// Event listeners
form.addEventListener("submit", function (e) {
    // console.log(e.target);
    e.preventDefault();

    if (!checkRequired([username, email, password, password2])) {
        checkLength(username, 3, 15);
        checkLength(password, 6, 25);
        checkEmail(email);
        checkPasswordsMatch(password, password2);
    }
});
