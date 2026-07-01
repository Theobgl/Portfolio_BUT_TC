const reveals = document.querySelectorAll(".reveal");
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const glow = document.querySelector(".cursor-glow");

const revealOnScroll = () => {
  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const top = element.getBoundingClientRect().top;

    if (top < windowHeight - 80) {
      element.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

window.addEventListener("mousemove", (e) => {
  if (window.innerWidth > 768 && glow) {
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
  }
});
