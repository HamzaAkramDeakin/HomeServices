//To initialize sockets
var socket = io();

//TO delete
function promptDelete() {
  return Swal.fire({
    icon: "warning",
    title: "Delete",
    text: "Do you want to delete this?",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    confirmButtonText: "Delete",
  });
}

function getServices() {
  fetch("/api/services")
    .then((res) => res.json())
    .then((data) => {
      displayCards(data);
    })
    .catch((ex) => {
      Swal.fire({
        icon: "error",
        title: "Something went wrong",
        text: ex.message,
      });
    });
}
getServices();

function displayCards(data) {
  const cards = document.querySelector("#cards");
  if (data.length > 0) {
    cards.innerHTML = data.map((service) => populate(service)).join("");
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
  <div class="col">
  <div
    class="card h-100 text-decoration-none"
    data-bs-toggle="modal"
    data-bs-target="#chatModal"
    data-bs-service="${service.name}"
  >
    <img src="/img/service.png" class="card-img-top" alt="" />
    <div class="card-body">
      <h5 class="mb-0 card-title">${service.name}</h5>
    </div>
  </div>
</div>; 
  `;
}
function displayUserName() {
  const user = JSON.parse(sessionStorage.getItem("customer"));
  const username = document.querySelector("#username");
  const userName = document.querySelector("#userName");
  username.innerHTML = `${user.firstName}`;
  userName.innerHTML = `Hello there ${user.firstName}`;
}
displayUserName();

function handleLogout() {
  localStorage.clear();
  window.location = "/";
}
