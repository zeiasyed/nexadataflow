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
  if (SITE.addressLine1) {
    var addressHtml = SITE.addressLine1;
    if (SITE.addressLine2) addressHtml += "<br>" + SITE.addressLine2;
    document.querySelectorAll("[data-site-address]").forEach(function (el) {
      el.innerHTML = addressHtml;
    });
    document.querySelectorAll("[data-site-maps]").forEach(function (el) {
      if (SITE.mapsUrl) el.href = SITE.mapsUrl;
    });
  }
  document.querySelectorAll(".contact-form[data-site-mailto]").forEach(function (form) {
    form.action = "mailto:" + SITE.email;
  });
  const yearEl = document.getElementById("footer-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
