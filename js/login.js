document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const loginContainer = document.querySelector(".login-container");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    if (!email || !password) {
      alert("Email and password are required.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users"));

    if (users && users.length) {
      for (let i = 0; i < users.length; i++) {
        if (
          email == users[i].email.toLowerCase() &&
          password == users[i].password
        ) {
          window.location.href = "PilihDokter.html";
          alert("Selamat Anda Berhasil Login");
          localStorage.setItem("nama_login", users[i].nama);
          return;
        }
      }
    } else {
      alert("Email or Password is Wrong.");
      emailInput.value = "";
      passwordInput.value = "";
      return;
    }
  });

  function showFeedback(isSuccess) {
    const message = isSuccess ? "Login berhasil!" : "Login gagal.";
    loginContainer.classList.remove("is-loading");
    loginContainer.classList.add(isSuccess ? "is-success" : "is-error");
    loginContainer.innerHTML = message;
  }
});

function redirectToGoogle() {
  window.location.href = "https://www.google.com"; // URL yang akan diarahkan
}
