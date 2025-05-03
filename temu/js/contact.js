document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
    const formStatus = document.getElementById("formStatus");
  
    if (name && email && subject && message) {
      // You can later replace this with real email sending (e.g. EmailJS)
      formStatus.textContent = "Thank you for contacting us, " + name + "! We'll get back to you soon.";
      formStatus.style.color = "green";
      this.reset();
    } else {
      formStatus.textContent = "Please fill in all fields.";
      formStatus.style.color = "red";
    }
  });
  