document.getElementById("demoForm").addEventListener("submit", function (e) {
  e.preventDefault();

  alert(
    "Thank you! Your demo request has been submitted. We will contact you shortly."
  );

  this.reset();
});
