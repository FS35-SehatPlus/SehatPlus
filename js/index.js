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

// Code to give smooth efect when click link and scrolling
navLinks.forEach((link) => {
  link.addEventListener("click", smoothScroll);
});

footerLinks.forEach((link) => {
  link.addEventListener("click", smoothScroll);
});

// Fungsi for smooth scroll
function smoothScroll(e) {
  e.preventDefault();

  const targetId = e.target.getAttribute("href").substring(1);
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}
// End Code to give smooth efect when click link and scrolling
