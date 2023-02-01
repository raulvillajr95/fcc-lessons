/**
 *
 *
 *
 *
 *
 *
 */

// Helpers
function loadElemToContainer(container, element, id) {
  const containerElem = document.querySelector(container);
  const newElem = document.createElement(element);
  newElem.setAttribute("id", id);
  containerElem.appendChild(newElem);
}
function addAttributeToElem(element, attName, attValue) {
  const elem = document.querySelector(element);
  elem.setAttribute(attName, attValue);
}
function addTextToElem(element, text) {
  const elem = document.querySelector(element);
  elem.textContent = text;
}

// Just display form
const displayForm = (() => {
  // whole of form
  loadElemToContainer(".content", "form", "main-form");

  // Email
  loadElemToContainer("#main-form", "label", "email-label");
  addTextToElem("#email-label", "Email:");
  addAttributeToElem("#email-label", "for", "email");
  loadElemToContainer("#main-form", "input", "email");
  addAttributeToElem("#email", "type", "email");
  addAttributeToElem("#email", "name", "email");
  addAttributeToElem("#email", "required", "");
  loadElemToContainer("#main-form", "span", "email-message");

  // Country
  loadElemToContainer("#main-form", "label", "country-label");
  addTextToElem("#country-label", "Country:");
  addAttributeToElem("#country-label", "for", "countries");
  loadElemToContainer("#main-form", "select", "countries");
  addAttributeToElem("#countries", "required", "");
  const countries = [
    "USA",
    "India",
    "UK",
    "Brazil",
    "Thailand",
    "Russia",
    "South Korea",
    "Spain",
    "Japan",
    "Canada",
    "Turkey",
    "Mexico",
    "Vietnam",
    "Germany",
    "France",
    "Argentina",
    "Australia",
    "Indonesia",
    "Phlippines",
    "Colombia",
    "Italy",
    "Netherlands",
    "Ukraine",
    "Saudi Arabia",
    "Romania",
  ];

  for (let i = 0; i < countries.length; i++) {
    loadElemToContainer("#countries", "option", `country-${i + 1}`);
    addTextToElem(`#country-${i + 1}`, `${countries[i]}`);
    addAttributeToElem(
      `#country-${i + 1}`,
      "value",
      `${countries[i].toLowerCase()}`
    );
  }

  // Zip Code //////
  loadElemToContainer("#main-form", "label", "postal-label");
  addTextToElem("#postal-label", "Postal code:");
  addAttributeToElem("#postal-label", "for", "postal");
  loadElemToContainer("#main-form", "input", "postal");
  addAttributeToElem("#postal", "type", "text");
  addAttributeToElem("#postal", "name", "postal");
  addAttributeToElem("#postal", "required", "");
  loadElemToContainer("#main-form", "span", "postal-message");

  // Password
  loadElemToContainer("#main-form", "label", "password-label");
  addTextToElem("#password-label", "Password:");
  addAttributeToElem("#password-label", "for", "password");
  loadElemToContainer("#main-form", "input", "password");
  addAttributeToElem("#password", "type", "text");
  addAttributeToElem("#password", "name", "password");
  loadElemToContainer("#main-form", "span", "password-message");
  // password confirmation /////
  loadElemToContainer("#main-form", "label", "password-confirmation-label");
  addTextToElem("#password-confirmation-label", "Password Confirmation:");
  addAttributeToElem(
    "#password-confirmation-label",
    "for",
    "password-confirmation"
  );
  loadElemToContainer("#main-form", "input", "password-confirmation");
  addAttributeToElem("#password-confirmation", "type", "text");
  addAttributeToElem("#password-confirmation", "name", "password-confirmation");
  loadElemToContainer("#main-form", "span", "password-confirmation-message");

  // Submit button
  loadElemToContainer("#main-form", "input", "submit");
  addTextToElem("#submit", "Submit");
  addAttributeToElem("#submit", "type", "submit");
})();

// Validation functions
const emailValidation = (validationType) => {
  const email = document.querySelector("#email");
  const emailMessage = document.querySelector("#email-message");
  if (validationType === "hard") {
  } else if (validationType === "soft") {
  }
  console.log(email.checkValidity());
};
const postalValidation = () => {
  const postalCode = document.querySelector("#postal");
  const postalMessage = document.querySelector("#postal-message");
  console.log(postalCode.checkValidity());
};
const passwordValidation = () => {
  const password = document.querySelector("#password");
  const passwordMessage = document.querySelector("#password-message");

  console.log(password.checkValidity());
};
// a different cause it's matching passwords
const passConfValidation = () => {
  const passwordConfirmation = document.querySelector("#password-confirmation");
  const passConfMessage = document.querySelector(
    "#password-confirmation-message"
  );

  console.log(passwordConfirmation.checkValidity());
};

// Validate Form
const autoValidateForm = (() => {
  const submit = document.querySelector("#submit");
  submit.addEventListener("click", (e) => {
    emailValidation("hard");
    postalValidation("hard");
    passwordValidation("hard");
    passConfValidation("hard");

    console.log("submit");

    e.preventDefault();
  });

  window.onchange = () => {
    emailValidation("soft");
    postalValidation("soft");
    passwordValidation("soft");
    passConfValidation("soft");

    console.log("window has changed");
  };
})();

/**
 * create funcion that validates each input
 *  email
 *  postal code
 *  password
 *  password confirmation
 *  when window.onchange it 'soft' validates
 *    yellow warning
 *  when submit, it 'hard' validates
 *    red warning
 * password is validated after every word
 * passwrod confirmation is validated on submit
 * advanced css
 *
 * notes:
 * -collect email, country, zip code, password(twice, password confirmation)
 * -live inline validation(js)
 *    each input has field that says what's wrong with form(validationMessage)
 * -higlight fields red when incorrect
 */
