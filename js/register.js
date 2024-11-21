document.getElementById('FormReg').addEventListener('submit', function(event)){
    event.preventDefault(); 
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const paswordError = document.getElementById('passwordError');
    const emailError = document.getElementById('emailError');
    emailError.textContent = '';
    passwordError.textContent = '';

}
