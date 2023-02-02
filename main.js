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
  addAttributeToElem(
    "#email",
    "pattern",
    `^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$`
  );
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
  addAttributeToElem("#password", "type", "password");
  addAttributeToElem("#password", "name", "password");
  addAttributeToElem("#password", "required", "");
  addAttributeToElem(
    "#password",
    "pattern",
    `^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$`
  );
  addAttributeToElem("#password", "minlength", "8");
  addAttributeToElem("#password", "maxlength", "12");
  loadElemToContainer("#main-form", "span", "password-message");
  // password confirmation
  loadElemToContainer("#main-form", "label", "password-confirmation-label");
  addTextToElem("#password-confirmation-label", "Password Confirmation:");
  addAttributeToElem(
    "#password-confirmation-label",
    "for",
    "password-confirmation"
  );
  loadElemToContainer("#main-form", "input", "password-confirmation");
  addAttributeToElem("#password-confirmation", "type", "password");
  addAttributeToElem("#password-confirmation", "name", "password-confirmation");
  addAttributeToElem("#password-confirmation", "required", "");
  addAttributeToElem(
    "#password-confirmation",
    "pattern",
    `^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$`
  );
  addAttributeToElem("#password-confirmation", "minlength", "8");
  addAttributeToElem("#password-confirmation", "maxlength", "12");
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

  // Check for YES validation
  // *    type check/typeMismatch
  // *    required check/valueMissing
  // *    pattern check/patternMismatch
  if (
    !email.validity.typeMismatch &&
    !email.validity.valueMissing &&
    !email.validity.patternMismatch
  ) {
    console.log("VALID email");
  } else {
    console.log("NOT valid email");
  }

  if (validationType === "hard") {
  } else if (validationType === "soft") {
  }
};
const postalValidation = (validationType) => {
  const postalCode = document.querySelector("#postal");
  const postalMessage = document.querySelector("#postal-message");

  // Check for YES validation
  // *    required check/valueMissing
  // *    pattern check/patternMismatch
  if (!postalCode.validity.valueMissing) {
    // create conditions for each country
    if (condition) {
      // console.log("VALID postal code");
    }
  } else {
    // console.log("NOT valid postal code");
  }

  if (validationType === "hard") {
  } else if (validationType === "soft") {
  }
  // console.log(postalCode.checkValidity());
};
const passwordValidation = (validationType) => {
  const password = document.querySelector("#password");
  const passwordMessage = document.querySelector("#password-message");

  // Check for YES validation
  // *    required/valueMissing
  // *    type check/typeMismatch
  // *    pattern/patternMismatch
  // *    maxlength/tooLong
  // *    minlength/tooShort
  if (
    !password.validity.typeMismatch &&
    !password.validity.valueMissing &&
    !password.validity.patternMismatch &&
    !password.validity.tooShort &&
    !password.validity.tooLong
  ) {
    // console.log("VALID password");
  } else {
    // console.log("NOT valid password");
  }

  if (validationType === "hard") {
  } else if (validationType === "soft") {
  }
  // console.log(password.checkValidity());
};
// a bit different cause it's matching passwords
const passConfValidation = (validationType) => {
  const passwordConfirmation = document.querySelector("#password-confirmation");
  const passConfMessage = document.querySelector(
    "#password-confirmation-message"
  );
  const password = document.querySelector("#password");

  // Check for YES validation
  // *    required/valueMissing
  // *    type check/typeMismatch
  // *    pattern/patternMismatch
  // *    maxlength/tooLong
  // *    minlength/tooShort
  // *    match password
  if (password.value === passwordConfirmation.value) {
    if (
      !passwordConfirmation.validity.typeMismatch &&
      !passwordConfirmation.validity.valueMissing &&
      !passwordConfirmation.validity.patternMismatch &&
      !passwordConfirmation.validity.tooShort &&
      !passwordConfirmation.validity.tooLong
    ) {
      // console.log("VALID password confirmation");
    } else {
      // console.log("NOT valid password confirmation");
    }
  }

  if (validationType === "hard") {
  } else if (validationType === "soft") {
  }
  // console.log(passwordConfirmation.checkValidity());
};

// Validate Form
const autoValidateForm = (() => {
  const submit = document.querySelector("#submit");
  submit.addEventListener("click", (e) => {
    emailValidation("hard");
    postalValidation("hard");
    passwordValidation("hard");
    passConfValidation("hard");

    // console.log("submit");

    // e.preventDefault();
  });

  window.onkeydown = () => {
    emailValidation("soft");
    postalValidation("soft");
    passwordValidation("soft");
    passConfValidation("soft");

    // console.log("window has changed");
  };
})();

/**
 * checkout type=password
 * create function that validates each input
 *  email(check inline and js)
 *    type check/typeMismatch
 *    required check/valueMissing
 *    pattern check/patternMismatch
 *  postal code
 *    required/valueMissing
 *    patternMismatch
 *  password
 *    required/valueMissing
 *    type check/typeMismatch
 *    pattern/patternMismatch
 *    maxlength/tooLong
 *    minlength/tooShort
 *  password confirmation
 *    required/valueMissing
 *    type check/typeMismatch
 *    pattern/patternMismatch
 *    maxlength/tooLong
 *    minlength/tooShort
 *    match password
 *  yellow warnings for soft validations
 *  red warnings for hard validations
 *  use 'typeMismatch' where needed, and other methods
 *    just look through a validity methods and see where they can be used
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
