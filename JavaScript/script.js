document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");
  const closeBtn = document.getElementById("closepopup");
  const form = document.getElementById("paymentForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Stop form submission

    // Check form validity manually
    if (form.checkValidity()) {
      popup.classList.add("open");
    } else {
      form.reportValidity(); // Show browser errors if fields are empty
    }
  });

  closeBtn.addEventListener("click", () => {
    popup.classList.remove("open");
    form.reset(); // Optional: reset form after closing
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("checkout-form");
  const popup = document.getElementById("popup");
  const closeBtn = document.getElementById("closepopup");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    popup.classList.add("open");
  });

  closeBtn.addEventListener("click", () => {
    popup.classList.remove("open");
    form.reset();
  });
});
