/**
 * Delete
 */
async function handleDelete(id) {
  const confirmed = await promptDelete();
  if (confirmed) {
    fetch(`/api/customer/${id}`, {
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
            title: "Customer deleted successfully",
            toast: true,
            showConfirmButton: false,
            timer: 1500,
            position: "bottom-right",
          });
          getCustomers();
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

function getCustomers() {
  fetch("/api/customer")
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

getCustomers();

function displayTable(data) {
  const table = document.querySelector("#customerTable");
  if (data.length > 0) {
    table.innerHTML = data.map((customer) => populate(customer)).join("");
  } else {
    table.innerHTML = `
    <tr>
      <td colspan="2">No customers Available yet</td>
    </tr>
  `;
  }
}

function populate(customer) {
  return `
    <tr>
    <td>${customer.firstName}</td>
    <td>${customer.lastName}</td>
    <td>${customer.email}</td>
    <td>
      <button class="btn btn-danger btn-sm" onclick="handleDelete('${customer._id}')" type="button">Delete</button>
    </td>
    </tr>
    `;
}
