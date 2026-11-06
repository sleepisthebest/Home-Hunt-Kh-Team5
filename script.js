
const form = document.getElementById("bookingForm");

const dateInput = document.getElementById("date");

const today = new Date();
const localDate = new Date(
    today.getTime() - today.getTimezoneOffset() * 60000
).toISOString().split("T")[0];

dateInput.min = localDate;

// Booking Form
form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const property = document.getElementById("propertyName").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const visitors = document.getElementById("visitors").value;

    // Display booking information
    document.getElementById("showProperty").textContent = property;

    document.getElementById("showDate").textContent =
        new Date(date + "T00:00:00").toLocaleDateString(
            "en-US",
            { month: "long", day: "numeric", year: "numeric" }
        );

    document.getElementById("showTime").textContent = time;

    document.getElementById("showVisitors").textContent = visitors;

    document.getElementById("showPhone").textContent = phone;

    // Hide booking page
    document.querySelector(".booking-section").style.display = "none";

    // Hide footer
    document.querySelector("footer").style.display = "none";

    // Show confirmation page
    document.getElementById("success").style.display = "flex";

});

// View Listings
function goToListings() {
    document.getElementById("success").style.display = "none";
    document.querySelector(".booking-section").style.display = "block";
    document.querySelector("footer").style.display = "block";

    document.getElementById("property").scrollIntoView({
        behavior: "smooth"
    });
}

// Back to Home
function goHome() {
    document.getElementById("success").style.display = "none";
    document.querySelector(".booking-section").style.display = "block";
    document.querySelector("footer").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
