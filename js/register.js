document.getElementById('FormReg').addEventListener ('submit', function(event) {
{
    event.preventDefault(); 
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const paswordError = document.getElementById('passwordError');
    const emailError = document.getElementById('emailError');
    emailError.textContent = '';
    passwordError.textContent = '';
    let valid = true; 
} 
document.getElementById('FormReg').addEventListener('submit', function(event){
    if (!email){
        emailError.textContent = 'Complete el campo porfavor';
        valid = false
    } 
    if (!password) {
        passwordError.textContent = 'Complete el campo porfavor';
        valid = false
    }
    if (valid) {
        window.location.href = 'login.html'
    }
}; 

