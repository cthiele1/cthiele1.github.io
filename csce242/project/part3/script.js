const hamburgerMenu = document.getElementById("hamburger-menu");
const navContainer = document.getElementById("bottomh-nav");

hamburgerMenu.onclick = () => {
  navContainer.classList.toggle("show");
};

document
  .getElementById("contactForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);
    const responseMessage = document.getElementById("responseMessage");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        responseMessage.textContent = "Form received!";
        responseMessage.className = "message success";
      } else {
        responseMessage.textContent = "Form not received. Please try again.";
        responseMessage.className = "message error";
      }
    } catch (error) {
      responseMessage.textContent = "An error occurred. Please try again.";
      responseMessage.className = "message error";
    }
  });
