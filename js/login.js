import { validateLogin } from "./apps.js";

const username = document.getElementById("username");
const email = document.getElementById("email");


form &&
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const isValid = validateLogin();
    if (!isValid) {
      return;
    }

    const user = {
      username: username.value,
      email: email.value,
      password: password.value,
    };

    fetch("https://auth-rg69.onrender.com/api/auth/signin", {
      method: "POST",

      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (response.status == 400) {
          alert("Password yoki username noto'g'ri kiritildi");
        }

        if (response.status == 200) {
          return response.json();
        }
      })

      .then((data) => {
        if (data.message == "User registered successfully!") {
          location.assign(`${window.location.origin}/index.html`);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });