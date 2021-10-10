/**
 * Login
 */
function handleLogin(event) {
  // Prevent page reload
  event.preventDefault();
  
// Send a POST request to the server
fetch('/api/customer/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: event.target.email.value,
    password: event.target.password.value,
  }),
})
  .then((res) => res.json())
  .then((data) => {
    if (data.error) {
      Swal.fire({
        icon: 'error',
        title: 'User not found',
        text: data.error,
      })
    } else {
      sessionStorage.setItem('customer', JSON.stringify(data));
      window.location = '/customer/';
    }
  })
  .catch((ex) => {
    toast.error(ex.message);
  })
  .finally(() => {
    event.target.reset();
  });
}

