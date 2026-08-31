const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav nav");
menuBtn?.addEventListener("click", () => {
  const open = nav.style.display === "flex";
  nav.style.display = open ? "" : "flex";
  nav.style.position = "absolute";
  nav.style.top = "68px";
  nav.style.left = "0";
  nav.style.right = "0";
  nav.style.padding = "18px 20px";
  nav.style.background = "rgba(7,8,10,.97)";
  nav.style.flexDirection = "column";
  nav.style.gap = "18px";
  nav.style.borderBottom = "1px solid rgba(255,255,255,.1)";
});
nav?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  if (window.innerWidth <= 900) nav.style.display = "";
}));

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({behavior:"smooth"});
  });
});
