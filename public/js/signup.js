const signupForm = document.querySelector('#signup');

signupForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const usernameText = document.querySelector('#username').value.trim();
    const passwordText = document.querySelector('#password').value.trim();

    const login = await fetch('/api/signup', {
        method: 'POST',
        body: JSON.stringify({ 
            username:usernameText,
            password: passwordText 
        }),
        headers: { 'Content-Type': 'application/json' },
    });
    
    //const response = await login.json();

    //console.log(login);
    //console.log(response);
});