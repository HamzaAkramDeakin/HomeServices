/**
 * Sign up
 */

function handleSignup(event) {
  // Prevent page reload
  event.preventDefault();

  // To grab all html elements
  const firstName = document.querySelector("#firstName");
  const lastName = document.querySelector("#lastName");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");

  // To handle the post request
  fetch("/api/customer", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.error) {
        Swal.fire({
          icon: "error",
          title: "Incorrect Credentials",
          text: data.error,
        });
      } else {
        Swal.fire({
          icon: "success",
          title: "Account Created",
          text: "You can go ahead and sign in",
        });
      }
    })
    .catch((ex) => {
      toast.error(ex.message);
    })
    .finally(() => {
      event.target.reset();
    });
}
