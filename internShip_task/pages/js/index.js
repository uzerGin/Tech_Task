const email = document.getElementById('email');
const pwd = document.getElementById('password');
const loginButton = document.getElementById('login');

//add eventListeners ti email and password 
email.addEventListener('input',valInput);
pwd.addEventListener('input',valInput);

//function  to check validation for email and password 
function valInput()
{
    if(email.checkValidity() && pwd.checkValidity())
    {
        loginButton.disabled = false; // if validation is successful user can login
    }

    else
    {
        loginButton.disabled = true;//if validation is not successful login button will stay disabled
        
    }
}
