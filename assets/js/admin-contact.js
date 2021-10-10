/**
 * Delete
 */
 async function handleDelete(id) {
  const confirmed = await promptDelete();
  if (confirmed) {
    fetch(`/api/contact/${id}`, {
      method: "DELETE",
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
            title: "Contact message deleted",
            toast: true,
            showConfirmButton: false,
            timer: 1500,
            position: "bottom-right",
          });
          getContacts();
        }
      })
      .catch((ex) => {
        Swal.fire({
          title: "Something went wrong",
          text: ex.message,
        });
      });
  }
}

function getContacts() {
  fetch("/api/contact")
    .then((res) => res.json())
    .then((data) => {
      displayTable(data);
    })
    .catch((ex) => {
      Swal.fire({
        icon: "error",
        title: "Something went wrong",
        text: ex.error,
      });
    });
}

getContacts();

function displayTable(data) {
  const table = document.querySelector("#contactTable");
  if (data.length > 0) {
    table.innerHTML = data.map((contact) => populate(contact)).join("");
  } else {
    table.innerHTML = `
    <tr>
      <td colspan="3" class="text-center">No contacts Available yet</td>
    </tr>
  `;
  }
}
function populate(contact) {
  return `
    <tr>
    <td>${contact.name}</td>
    <td>${contact.email}</td>
    <td>${contact.message}</td>
    <td>
      <button class="btn btn-danger btn-sm" onclick="handleDelete('${contact._id}')" type="button">Delete</button>
    </td>
    </tr>
    `;
}
