/**
 * Delete
 */
async function handleDelete(id) {
  const confirmed = await promptDelete();
  if (confirmed) {
    fetch(`/api/services/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
          Swal.fire({
            icon: "error",
            title: "Something went wrong",
            text: data.error,
          });
        } else {
          Swal.fire({
            icon: "success",
            title: "Service deleted successfully",
            toast: true,
            showConfirmButton: false,
            timer: 1500,
            position: "bottom-right",
          });
          getServices();
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

function handleAddService() {
  // To grab HTML element
  const serviceName = document.querySelector("#name");

  fetch("/api/services", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name: serviceName.value,
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
          title: "Service deleted successfully",
          toast: true,
          showConfirmButton: false,
          timer: 1500,
          position: "bottom-right",
        });
      }
    })
    .catch((ex) => {
      toast.error(ex.message);
    })
    .finally(() => {
      getServices();
    });
}

function getServices() {
  fetch("/api/services")
    .then((res) => res.json())
    .then((data) => {
      displayTable(data);
    })
    .catch((ex) => {
      Swal.fire({
        icon: "error",
        title: "Something went wrong",
        text: data.error,
      });
    });
}

getServices();

function displayTable(data) {
  const table = document.querySelector("#serviceTable");
  if (data.length > 0) {
    table.innerHTML = data.map((service) => populate(service)).join("");
  } else {
    table.innerHTML = `
    <tr>
      <td colspan="2">No Services Available yet</td>
    </tr>
  `;
  }
}

function populate(service) {
  return `
  <tr>
  <td>${service.name}</td>
  <td>
  <button class="btn btn-danger btn-sm" onclick="handleDelete('${service._id}')" type="button">Delete</button>
  </td>
  </tr>`;
}
