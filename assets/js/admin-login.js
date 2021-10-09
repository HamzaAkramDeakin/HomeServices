/**
 * Login
 */

// Handle login
function handleLogin(event) {
   
  // Prevent reloading the page
  event.preventDefault();

  // Form data
  const username = document.querySelector('#username')
  const password = document.querySelector('#password')

  // Check the credentials
  if (username.value === 'admin' && password.value === '123') {
    window.location = '/admin/';
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Incorrect Credentials',
      text: 'Username or password is incorrect',
    })
  }
}

