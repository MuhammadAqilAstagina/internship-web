// form
$(document).ready(function () {
  // Password strength indicator
  $("#registerPassword").on("keyup", function () {
    var password = $(this).val();
    var strength = 0;

    // Check length
    if (password.length >= 8) strength += 25;
    if (password.length >= 12) strength += 25;

    // Check for numbers
    if (password.match(/\d+/)) strength += 25;

    // Check for special characters
    if (password.match(/[!@#$%^&*?_~]/)) strength += 25;

    // Update strength bar
    $("#passwordStrength").css("width", strength + "%");

    // Change color based on strength
    if (strength < 50) {
      $("#passwordStrength").css("background-color", "#e74c3c");
    } else if (strength < 75) {
      $("#passwordStrength").css("background-color", "#f39c12");
    } else {
      $("#passwordStrength").css("background-color", "#2ecc71");
    }
  });

  // File upload display
  $("#resumeUpload").change(function () {
    var fileName = $(this).val().split("\\").pop();
    $("#fileName").text(fileName || "No file selected");
  });

  // Form validation
  $("#loginForm").submit(function (e) {
    e.preventDefault();
    // Add your login logic here
    alert("Login functionality would be implemented here");
  });

  $("#registerForm").submit(function (e) {
    e.preventDefault();
    // Add your registration logic here
    alert("Registration functionality would be implemented here");

    // In a real application, you would submit the form via AJAX
    // and handle the response appropriately
  });

  // Focus on email field when login tab is shown
  $('a[href="#login"]').on("shown.bs.tab", function () {
    $("#loginEmail").focus();
  });

  // Focus on first name field when register tab is shown
  $('a[href="#register"]').on("shown.bs.tab", function () {
    $("#firstName").focus();
  });
});
