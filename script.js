
"use strict";

// STEP 1: Select the form
const registrationForm = document.getElementById("registrationForm");

// STEP 2: Select the input fields
const fullNameInput = document.getElementById("fullName");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const courseInput = document.getElementById("course");

// STEP 3: Select the error message elements
const fullNameError = document.getElementById("fullNameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const courseError = document.getElementById("courseError");

// STEP 4: Select the success message
const successMessage = document.getElementById("successMessage");

// STEP 5: Select the member list and counter
const memberList = document.getElementById("memberList");
const memberCount = document.getElementById("memberCount");

// STEP 6: Select the Dark Mode button
const darkModeToggle = document.getElementById("darkModeToggle");

const registrationHeading = document.querySelector("main section h2");

console.log("Registration Heading:", registrationHeading);

// STEP 7: Display selected elements in the console
console.log("Registration Form:", registrationForm);
console.log("Full Name Input:", fullNameInput);
console.log("Email Input:", emailInput);
console.log("Phone Input:", phoneInput);
console.log("Course Input:", courseInput);
console.log("Full Name Error:", fullNameError);
console.log("Email Error:", emailError);
console.log("Phone Error:", phoneError);
console.log("Course Error:", courseError);
console.log("Success Message:", successMessage);
console.log("Member List:", memberList);
console.log("Member Counter:", memberCount);
console.log("Dark Mode Button:", darkModeToggle);

/* STEP 4: Form validation */

// Check whether all fields contain valid information
function validateForm() {
  let isValid = true;

  // Get the values entered by the user
  const fullName = fullNameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();
  const course = courseInput.value;

  // Clear previous error messages
  fullNameError.textContent = "";
  emailError.textContent = "";
  phoneError.textContent = "";
  courseError.textContent = "";

  // Validate Full Name
  if (fullName.length < 2) {
    fullNameError.textContent =
      "Please enter your full name (at least 2 characters).";
    isValid = false;
  }

  // Validate Email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    emailError.textContent =
      "Please enter a valid email address.";
    isValid = false;
  }

  // Validate Phone Number
  const phonePattern = /^\+?[0-9\s()-]{9,15}$/;

  if (!phonePattern.test(phone)) {
    phoneError.textContent =
      "Please enter a valid phone number.";
    isValid = false;
  }

  // Validate Course
  if (course === "") {
    courseError.textContent =
      "Please select a course.";
    isValid = false;
  }

  // Return the final result
  return isValid;
}
console.log("Validation function:", validateForm);


/* STEP 6: Register and display members */

registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Validate the form first
  const isValid = validateForm();

  if (!isValid) {
    return;
  }

  // Collect the member's details
  const fullName = fullNameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();
  const course = courseInput.value;

  // Create a new list item
  const listItem = document.createElement("li");

  // Create a text element for the member's details
  const memberDetails = document.createElement("span");
  memberDetails.textContent =
    `${fullName} | ${email} | ${phone} | ${course}`;

  // Create a Remove button
  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.textContent = "Remove";
  
removeButton.addEventListener("click", function () {
  listItem.remove();

  // Update the counter after removing a member
  memberCount.textContent = memberList.children.length;
});


  // Add the details and button to the list item
  listItem.appendChild(memberDetails);
  listItem.appendChild(removeButton);

  // Add the new member to the webpage
  memberList.appendChild(listItem);

  // Update the member counter
  memberCount.textContent = memberList.children.length;

  // Display a success message
  successMessage.textContent =
    `${fullName} has been registered successfully!`;
  successMessage.hidden = false;

  // Clear the form
  registrationForm.reset();

  // Clear any old validation messages
  fullNameError.textContent = "";
  emailError.textContent = "";
  phoneError.textContent = "";
  courseError.textContent = "";

  console.log("Member registered successfully!");
});


/* STEP 7: Clear errors when the user edits a field */

fullNameInput.addEventListener("input", function () {
  fullNameError.textContent = "";
});

emailInput.addEventListener("input", function () {
  emailError.textContent = "";
});

phoneInput.addEventListener("input", function () {
  phoneError.textContent = "";
});

courseInput.addEventListener("change", function () {
  courseError.textContent = "";
});

/* STEP 8: Toggle Dark Mode */

darkModeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    darkModeToggle.textContent = "Light Mode";
  } else {
    darkModeToggle.textContent = "Dark Mode";
  }
});
