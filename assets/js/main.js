(function () {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      const open = navLinks.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }
  if (typeof SITE === "undefined") return;
  document.querySelectorAll("[data-site-email]").forEach(function (el) {
    el.textContent = SITE.email;
    if (el.tagName === "A") el.href = "mailto:" + SITE.email;
  });
  document.querySelectorAll("[data-site-phone]").forEach(function (el) {
    el.textContent = SITE.phone;
  });
  document.querySelectorAll("[data-site-phone-link]").forEach(function (el) {
    el.textContent = el.textContent || SITE.phone;
    el.href = "tel:" + SITE.phoneTel;
  });
  document.querySelectorAll("[data-site-company]").forEach(function (el) {
    el.textContent = SITE.company;
  });
  const yearEl = document.getElementById("footer-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
