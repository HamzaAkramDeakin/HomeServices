/**
 * Send a contact message
 */
function handleSend(event) {
  // Prevent page reload
  event.preventDefault();

  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const message = document.querySelector("#message");

  fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      message: message.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.error) {
        Swal.fire({
          icon: "error",
          title: "Something went wrong",
          text: data.error,
        });
      } else {
        Swal.fire({
          icon: "success",
          showConfirmButton:true,
          title: "Form Submitted Successfully",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location = '/';
          }
        })
      }
    });
}
