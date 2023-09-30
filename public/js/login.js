const loginForm = document.querySelector('#login');

loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const usernameText = document.querySelector('#username').value.trim();
    const passwordText = document.querySelector('#password').value.trim();

    const login = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ 
            username:usernameText,
            password: passwordText 
        }),
        headers: { 'Content-Type': 'application/json' },
    });
    document.location.replace('/home');
});