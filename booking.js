document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const numTravelers = document.getElementById("num-travelers");
  const contactName = document.getElementById("contact-name");
  const contactPhone = document.getElementById("contact-phone");
  const joinLandCheckbox = document.querySelector("input[name='join-land']");

  form.addEventListener("submit", function (event) {
    let isValid = true;

    // Validate contact name
    if (contactName.value.trim() === "") {
      alert("Contact Name cannot be empty.");
      isValid = false;
    }

    // Validate contact phone
    if (contactPhone.value.trim() === "") {
      alert("Contact Phone cannot be empty.");
      isValid = false;
    }

    // Validate number of travelers
    const numTravelersValue = parseInt(numTravelers.value, 10);
    if (
      isNaN(numTravelersValue) ||
      numTravelersValue < 1 ||
      numTravelersValue > 15
    ) {
      alert("Number of Travelers must be a number between 1 and 15.");
      isValid = false;
    }

    // Check if Join Land checkbox is checked
    if (joinLandCheckbox.checked) {
      const confirmation = confirm(
        "Are you sure you want to buy your own flight tickets?"
      );
      if (confirmation) {
        alert("You have chosen to buy your own flight tickets.");
      } else {
        isValid = false;
      }
    }

    if (!isValid) {
      event.preventDefault(); // Prevent form submission if validation fails
    }
  });
});
