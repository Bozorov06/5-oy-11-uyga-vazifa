import { validateRegister } from "./apps.js";

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

form &&
  form
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const isValid = validateRegister();
      if (!isValid) {
        return;
      }

      const user = {
        username: username.value,
        email: email.value,
        password: password.value,
      };

      fetch("https://auth-rg69.onrender.com/api/auth/signup", {
        method: "POST",

        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
    .then((response) => {
      if (response.status == 400) {
        alert("Email yoki username noto'g'ri kiritildi");
      }

      if (response.status == 200) {
        return response.json();
      }
    })

    .then((data) => {
      if (data.message == "User registered successfully!") {
        location.assign(`${window.location.origin}/pages/login.html`);
      }
    })
    .catch((error) => {
      console.log(error);
    })
    })
