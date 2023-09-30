const signupForm = document.querySelector('#signup');

signupForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const usernameText = document.querySelector('#username').value.trim();
    const passwordText = document.querySelector('#password').value.trim();

    console.log('did this happen? yes it did1');
    const login = await fetch('/api/signup', {
        method: 'POST',
        body: JSON.stringify({ 
            username:usernameText,
            password: passwordText 
        }),
        headers: { 'Content-Type': 'application/json' },
    });
    console.log('did this happen? yes it did2');
    document.location.replace('/home');
    
    //const response = await login.json();

    // console.log(login);
    // console.log(response);
});