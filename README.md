# form-validator 만들기 (1)
## html, javascript


---

1️⃣ `error message` 와 `success outline` 기능 함수 구현

```js
// Show input "error message"
 function showError(input, message) {
    console.log(input.parentElement);
    const formControl = input.parentElement;
    formControl.className = "form-control error";  
    
    const small = formControl.querySelector("small"); // 지역변수로 선언해줘야 한다
    small.innerText = message;   // ❗ 추가될 메시지(small은 기본 hidden으로 css추가) ➡ visible) 입력값 받기
}

// Show input "success outline"
function showSuccess(input) {
    const formControl = input.parentElement;

    formControl.className = "form-control success"; // 초록선 적용되도록 css추가
}
```

2️⃣ 입력받은 값의 id이름(username, password, email 등)의 앞글자를 대문자로 바꿔서 출력

error메시지가 뜰 때, 해당 id값을 불러올 때 맨 첫글자가 대문자일 수 있도록

```js
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// getFieldName 함수 활용

// Check required fields
function checkRequired(inputArr) {
    let isRequired = false;
    inputArr.forEach(function (input) {
        if (input.value.trim() === "") {       // 값이 없으면
            showError(input, `${getFieldName(input)} is required`);
            isRequired = true;
        } else {
            showSuccess(input);
        }
    });

    return isRequired;
}
```

3️⃣ `form`의 `submit`을 눌렀을 때, 발생하는 success와 error메시지 관련 기능 구현

```js
// Event listeners
form.addEventListener("submit", function (e) {
    // console.log(e.target);
    e.preventDefault();
    // preventDefault를 해주지 않으면, submit됨과 동시에 창이 다시 실행된다(초기화면으로 돌아옴)
    // preventDefault를 적용해주면, 새로 이동되는 것을 막아준다

    if (!checkRequired([username, email, password, password2])) {
        checkLength(username, 3, 15);
        checkLength(password, 6, 25);
        checkEmail(email);
        checkPasswordsMatch(password, password2);
    }
});
```
