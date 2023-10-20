// Code for add class active and remove class active
const navLinks = document.querySelectorAll(".nav-link");
const footerLinks = document.querySelectorAll(".footer-link");
let activeLink = document.querySelector(".nav-link.active");

navLinks.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    // Hapus kelas 'active' dari tautan yang saat ini aktif
    if (activeLink) {
      activeLink.classList.remove("active");
    }
    // Tambahkan kelas 'active' ke tautan yang sedang di-hover
    link.classList.add("active");
  });

  link.addEventListener("mouseleave", () => {
    // Kembalikan kelas 'active' ke tautan "Home" saat tidak ada yang di-hover
    if (link !== activeLink) {
      link.classList.remove("active");
      activeLink.classList.add("active");
    }
  });
});
// End Code for add class active and remove class active

// Code to get current year for footer
function getYear() {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  document.querySelector("#displayYear").innerHTML = currentYear;
}
getYear();
// End Code to get current year for footer

// Back To  TOP
const backToTopButton = document.querySelector(".backtop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 70) {
    backToTopButton.classList.add("reveal");
  } else {
    backToTopButton.classList.remove("reveal");
  }
});

backToTopButton.addEventListener("click", (e) => {
  e.preventDefault();
  const target = document.getElementById("top");

  window.scrollTo({
    top: target.offsetTop,
    behavior: "smooth", // Animated scroll
  });
});
// End Back To  TOP
