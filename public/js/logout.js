const logout = async (event) => {
    event.preventDefault();
console.log('is anything even happening??')
    const response = await fetch('/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  };
  
  const logoutButton = document.querySelector('#logoutButton');
  logoutButton.addEventListener('click', logout);