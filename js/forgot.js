// script.js

// Kode JavaScript untuk mengarahkan ke halaman reset
function redirectToResetPage() {
    const emailInput = document.getElementById("email").value;
    if (emailInput.trim() !== "") {
        window.location.href = "reset.html";
    }
}

// Kode JavaScript untuk mengarahkan ke Google
function redirectToGoogle() {
    window.location.href = "https://www.google.com";
}

// Hapus validasi email sebelum pengalihan
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        redirectToResetPage();
    });
});
