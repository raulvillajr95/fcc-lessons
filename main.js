/**
 *
 *
 *
 *
 */

const submitBtn = document.querySelector("#submit");
const nameMessage = document.querySelector("#name-message");
const nameInput = document.querySelector("#name");
submitBtn.addEventListener("click", () => {
  if (nameInput.validity.tooShort) {
    nameMessage.textContent = "Name is too short";
  }
});
