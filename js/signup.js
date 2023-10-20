// signup.js

// Fungsi Untuk  Membuat Akun atau REGISTER
function register(e) {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  if (validateForm() && confirmPassword()) {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    users.push({ email: email, password: pass });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Selamat Anda Telah Berhasil Daftar");
    window.location.href = "login.html";
  } else {
    console.log("Email tidak valid.");
  }
}

// Fungsi untuk mengonfirmasi kata sandi
function confirmPassword() {
  const passwordInput = document.getElementById("password").value;
  const confirmPassInput = document.getElementById("confirm-pass").value;

  // Menghapus pesan kesalahan sebelumnya
  const errorElement = document.getElementById("error-message");
  if (errorElement) {
    errorElement.remove();
  }

  if (passwordInput !== confirmPassInput) {
    // alert("Password and confirm password do not match.");
    return false;
  } else {
    return true;
  }
}

// Fungsi untuk menampilkan pesan kesalahan
function showError(errorMessage) {
  const errorElement = document.createElement("p");
  errorElement.id = "error-message";
  errorElement.textContent = errorMessage;
  errorElement.style.color = "red";
  const form = document.getElementById("signupForm");
  form.appendChild(errorElement);
}

// Event listener untuk tombol "Signup"
document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.getElementById("signupForm");
  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();
    register();
    // confirmPassword();
    // validateForm();
  });
});

// Fungsi untuk validasi form
function validateForm() {
  const emailInput = document.getElementById("email").value;
  const passwordInput = document.getElementById("password").value;

  // Menghapus pesan kesalahan sebelumnya
  const errorElement = document.getElementById("error-message");
  if (errorElement) {
    errorElement.remove();
  }

  if (!emailInput) {
    showError("Email is required.");
  } else if (!isValidEmail(emailInput)) {
    showError("Invalid email address.");
  } else if (!passwordInput) {
    showError("Password is required.");
  } else if (passwordInput.length < 6) {
    showError("Password must be at least 6 characters.");
  } else if (!confirmPassword()) {
    showError("Password doesn't match.");
  } else {
    return true;
  }
}

// Fungsi untuk memeriksa apakah email valid
function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}

// Fungsi untuk mengarahkan ke Google
function redirectToGoogle() {
  window.location.href = "https://www.google.com"; // Gantilah URL sesuai dengan URL yang sesuai untuk login dengan Google.
}
