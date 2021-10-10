const chatModal = document.getElementById('chatModal');
/**
 * Listen when modal opens
 */
chatModal.addEventListener('show.bs.modal', function (event) {
  // Element that triggered the modal
  const element = event.relatedTarget;
  // Extract info from data-bs-* attributes
  const service = element.getAttribute('data-bs-service');
  // Update the modal's content
  const modalTitle = chatModal.querySelector('.modal-title');
  modalTitle.textContent = service;
});

/**
 * Search for a service
 */
function handleSearch(event) {
  // Prevent page reload
  event.preventDefault();
}

/**
 * Send a message
 */
function handleSend(event) {
  // Prevent page reload
  event.preventDefault();
}
