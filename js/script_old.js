const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

// show input error message
function showError(input, message) {
    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control error';
    const small = formcontrol.queryselector('small');
    small.innertext = message;
}

// show success outline
function showSuccess(input) {
    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control success';
}

// check email is valid
function isvalidemail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// event listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();

if (username.value === ''){
   showError(username, 'username is required');
}else {
    showSuccess(username);
}

if (email.value === ''){
    showError(email, 'email is required')
 } else if(!isValidEmail(email.value)) {
     showError(email,"email is not valid" );
 }else {
     showSuccess(email)
 }

 if (password.value === ''){
    showError(password, 'password is required');
 }else {
     showSuccess(password);
 }

 if (password2.value === ''){
    showError(password2, 'password2 is required')
 }else {
     showsuccess(password2)
 }
});
