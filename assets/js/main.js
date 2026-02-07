// Mobile nav toggle
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Simple form validation 
function validateForm(event) {
  event.preventDefault();
  alert("Your request has been recorded (demo mode).");
}

const forms = document.querySelectorAll("form");
forms.forEach(f => f.addEventListener("submit", validateForm));