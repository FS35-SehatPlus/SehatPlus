// reset.js

// Fungsi untuk mengonfirmasi kata sandi
function confirmPassword() {
    const passwordInput = document.getElementById("password").value;
    const confirmPasswordInput = document.getElementById("confirm-pass").value;

    // Menghapus pesan kesalahan sebelumnya
    const errorElement = document.getElementById("error-message");
    if (errorElement) {
        errorElement.remove();
    }

    if (passwordInput !== confirmPasswordInput) {
        showError("Password and confirm password do not match.");
    } else if (passwordInput.length < 6) {
        showError("Password must be at least 6 characters.");
    } else {
        // Password valid, lanjutkan ke halaman berikutnya
        window.location.href = "sukses.html"; // Gantilah URL sesuai dengan halaman berikutnya.
    }
}

// Fungsi untuk menampilkan pesan kesalahan
function showError(errorMessage) {
    const errorElement = document.createElement("p");
    errorElement.id = "error-message";
    errorElement.textContent = errorMessage;
    errorElement.style.color = "red";
    const form = document.querySelector("form");
    form.appendChild(errorElement);
}

// Event listener untuk tombol "Confirm"
document.addEventListener("DOMContentLoaded", function () {
    const confirmButton = document.querySelector("form button[type='submit']");
    confirmButton.addEventListener("click", function (event) {
        event.preventDefault();
        confirmPassword();
    });
});
