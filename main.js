/**
 *
 *
 *
 *
 *
 *
 */

// Dependencies
const postalCodePatterns = [
  {
    country: "argentina",
    pattern: "(^[a-z]{1}\\d{4}[a-z]{3}$|^\\d{4}$)",
  },
  {
    country: "australia",
    pattern: "^(?:(?:[2-8]\\d|9[0-7]|0?[28]|0?9(?=09))(?:\\d{2}))$",
  },
  { country: "brazil", pattern: `^\\d{5}-?\\d{3}$` },
  {
    country: "canada",
    pattern: `^(?:[ABCEGHJ-NPRSTVXY]\\d[A-Z][ -]?\\d[A-Z]\\d)$`,
  },
  {
    country: "colombia",
    pattern: `^\\d{6}$`,
  },
  {
    country: "france",
    pattern: `^\\d{5}$`,
  },
  {
    country: "germany",
    pattern: `^\\d{5}$`,
  },
  {
    country: "india",
    pattern: `^\\d{6}$`,
  },
  {
    country: "indonesia",
    pattern: `^\\d{5}$`,
  },
  {
    country: "italy",
    pattern: `^\\d{5}$`,
  },
  {
    country: "japan",
    pattern: `^\\d{3}-\\d{4}$`,
  },
  {
    country: "mexico",
    pattern: `^\\d{5}$`,
  },
  {
    country: "netherlands",
    pattern: `^\\d{4} ?[A-Z]{2}$`,
  },
  {
    country: "philippines",
    pattern: `^\\d{4}$`,
  },
  {
    country: "romania",
    pattern: `^\\d{6}$`,
  },
  {
    country: "russia",
    pattern: `^\\d{6}$`,
  },
  {
    country: "saudi arabia",
    pattern: `^\\d{5}(-\\d{4})?$`,
  },
  {
    country: "south korea",
    pattern: `^\\d{5}$`,
  },
  {
    country: "spain",
    pattern: `^\\d{5}$`,
  },
  {
    country: "thailand",
    pattern: `^\\d{5}$`,
  },
  {
    country: "turkey",
    pattern: `^\\d{5}$`,
  },
  {
    country: "uk",
    pattern: `^[A-Za-z][A-Ha-hK-Yk-y]?\\d[A-Za-z0-9]? ?\\d[A-Za-z]{2}$`,
  },
  {
    country: "usa",
    pattern: `^\\d{5}([- ]\\d{4})?$`,
  },
  {
    country: "ukraine",
    pattern: `^\\d{5}$`,
  },
  {
    country: "vietnam",
    pattern: `^\\d{6}$`,
  },
];

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
    "Argentina",
    "Australia",
    "Brazil",
    "Canada",
    "Colombia",
    "France",
    "Germany",
    "India",
    "Indonesia",
    "Italy",
    "Japan",
    "Mexico",
    "Netherlands",
    "Philippines",
    "Romania",
    "Russia",
    "Saudi Arabia",
    "South Korea",
    "Spain",
    "Thailand",
    "Turkey",
    "UK",
    "USA",
    "Ukraine",
    "Vietnam",
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
  addAttributeToElem("#postal", "pattern", `${postalCodePatterns[0].pattern}`);
  loadElemToContainer("#main-form", "span", "postal-message");
  // change country pattern when select is changed
  const countriesSelect = document.querySelector(`#countries`);
  countriesSelect.addEventListener("change", (e) => {
    addAttributeToElem(
      "#postal",
      "pattern",
      `${postalCodePatterns[countriesSelect.selectedIndex].pattern}`
    );
  });

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
  loadElemToContainer("#main-form", "ul", "password-message");
  const passwordRequirements = [
    "Minimum 1 uppercase letter",
    "Minimum 1 lowercase letter",
    "Minimum 1 number",
    "Minimum 1 symbol",
    "8 to 12 characters total",
  ];
  for (let j = 0; j < 5; j++) {
    loadElemToContainer("#password-message", "li", `password-message-${j + 1}`);
    addTextToElem(`#password-message-${j + 1}`, `${passwordRequirements[j]}`);
  }
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
    // console.log("VALID email");
    // email.style.border = "1px solid green";
  } else {
    // console.log("NOT valid email");
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
  if (
    !postalCode.validity.valueMissing &&
    !postalCode.validity.patternMismatch
  ) {
    // console.log("VALID postal code");
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
  const min1Upper = document.querySelector("#password-message-1");
  const min1Lower = document.querySelector("#password-message-2");
  const min1Number = document.querySelector("#password-message-3");
  const min1Symbol = document.querySelector("#password-message-4");
  const eightToTwelve = document.querySelector("#password-message-5");

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
    console.log("VALID password");
  } else {
    console.log("NOT valid password");
  }

  // Minimum 1 uppercase letter
  password.value.match(/[A-Z]+/g)
    ? min1Upper.classList.add("success")
    : min1Upper.classList.remove("success");
  // // Minimum 1 lowercase letter
  password.value.match(/[a-z]+/g)
    ? min1Lower.classList.add("success")
    : min1Lower.classList.remove("success");
  // // Minimum 1 number
  password.value.match(/[0-9]+/g)
    ? min1Number.classList.add("success")
    : min1Number.classList.remove("success");
  // // Minimum 1 symbol
  password.value.match(/[!@#$%^&*_=+-]+/g)
    ? min1Symbol.classList.add("success")
    : min1Symbol.classList.remove("success");
  // // 8 to 12 characters total
  password.value.match(/.{8,12}/g)
    ? eightToTwelve.classList.add("success")
    : eightToTwelve.classList.remove("success");

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
      console.log("VALID password confirmation");
    } else {
      console.log("NOT valid password confirmation");
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

  window.onkeyup = () => {
    emailValidation("soft");
    postalValidation("soft");
    passwordValidation("soft");
    passConfValidation("soft");

    // console.log("window has changed");
  };
})();

/**
 * do all validation messages
 * then work on all invalid styling
 * create function that validates each input
 *  email(check inline and js)
 *    type check/typeMismatch
 *    required check/valueMissing
 *    pattern check/patternMismatch
 *  postal code
 *    required/valueMissing
 *    pattern check/patternMismatch
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
