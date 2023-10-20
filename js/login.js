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
  
      // Simulasi pengiriman form (ganti ini dengan kode pengiriman sesungguhnya)
      showLoading();
      setTimeout(function () {
        const isSuccess = true; // Gantilah ini dengan logika hasil login
        showFeedback(isSuccess);
      }, 1000);
    });
  
    function showLoading() {
      loginContainer.classList.add("is-loading");
    }
  
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
  