/* =========================================================
   ERIC NGUYEN — PORTFOLIO
   Theme (dark/light), mobile nav, and a small client-side
   i18n system driven by data-i18n keys + a translations
   dictionary. No backend, no frameworks — GitHub Pages safe.
   ========================================================= */

(function () {
  "use strict";

  /* ---------------- Theme ---------------- */
  var root = document.documentElement;
  var storedTheme = localStorage.getItem("theme");
  var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  var theme = storedTheme || (prefersDark ? "dark" : "light");
  root.setAttribute("data-theme", theme);

  function updateThemeLabel() {
    var btn = document.querySelector("[data-theme-toggle]");
    if (btn) btn.textContent = root.getAttribute("data-theme") === "dark" ? "LIGHT" : "DARK";
  }
  updateThemeLabel();

  document.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-theme-toggle]");
    if (!btn) return;
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    updateThemeLabel();
  });

  /* ---------------- Mobile nav ---------------- */
  document.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-menu-toggle]");
    if (!btn) return;
    var nav = document.querySelector(".nav-links");
    if (nav) nav.classList.toggle("open");
  });
  document.querySelectorAll(".nav-links a").forEach(function (a) {
    a.addEventListener("click", function () {
      var nav = document.querySelector(".nav-links");
      if (nav) nav.classList.remove("open");
    });
  });

  /* ---------------- Language ---------------- */
  var LANG_KEY = "lang";
  var lang = localStorage.getItem(LANG_KEY) || "en";

  function applyLang(l) {
    document.documentElement.setAttribute("lang", l);
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var dict = window.I18N && window.I18N[key];
      if (dict && dict[l]) el.innerHTML = dict[l];
    });
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      var pairs = el.getAttribute("data-i18n-attr").split(",");
      pairs.forEach(function (pair) {
        var parts = pair.split(":");
        var attr = parts[0].trim();
        var key = parts[1].trim();
        var dict = window.I18N && window.I18N[key];
        if (dict && dict[l]) el.setAttribute(attr, dict[l]);
      });
    });
    var btn = document.querySelector("[data-lang-toggle]");
    if (btn) btn.textContent = l === "en" ? "FR" : "EN";
  }

  applyLang(lang);

  document.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-lang-toggle]");
    if (!btn) return;
    lang = lang === "en" ? "fr" : "en";
    localStorage.setItem(LANG_KEY, lang);
    applyLang(lang);
  });

  /* ---------------- Case-study section nav: active state ---------------- */
  var sections = document.querySelectorAll("[data-cs-section]");
  var navLinks = document.querySelectorAll(".cs-nav-strip a");
  if (sections.length && navLinks.length && "IntersectionObserver" in window) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navLinks.forEach(function (l) { l.classList.remove("active"); });
          var match = document.querySelector('.cs-nav-strip a[href="#' + entry.target.id + '"]');
          if (match) match.classList.add("active");
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    sections.forEach(function (s) { obs.observe(s); });
  }
  /* ---------------- Swiper (lightweight, dependency-free) ---------------- */
  document.querySelectorAll('[data-swiper]').forEach(function (swiper) {
    var track = swiper.querySelector('.swiper-track');
    var slides = swiper.querySelectorAll('.swiper-slide');
    var dots = swiper.querySelectorAll('.dot');
    var prevBtn = swiper.querySelector('[data-swiper-prev]');
    var nextBtn = swiper.querySelector('[data-swiper-next]');
    if (!track || !slides.length) return;

    function goTo(index) {
      index = Math.max(0, Math.min(index, slides.length - 1));
      track.scrollTo({ left: slides[index].offsetLeft, behavior: 'smooth' });
    }
    function currentIndex() {
      var scrollLeft = track.scrollLeft;
      var closest = 0, closestDist = Infinity;
      slides.forEach(function (s, i) {
        var dist = Math.abs(s.offsetLeft - scrollLeft);
        if (dist < closestDist) { closestDist = dist; closest = i; }
      });
      return closest;
    }
    function updateDots() {
      var idx = currentIndex();
      dots.forEach(function (d, i) { d.classList.toggle('active', i === idx); });
    }
    if (prevBtn) prevBtn.addEventListener('click', function () { goTo(currentIndex() - 1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { goTo(currentIndex() + 1); });
    dots.forEach(function (d, i) { d.addEventListener('click', function () { goTo(i); }); });
    track.addEventListener('scroll', function () {
      window.clearTimeout(track._scrollTimer);
      track._scrollTimer = window.setTimeout(updateDots, 80);
    });
    updateDots();
  });
})();

(function () {
  "use strict";

  document.querySelectorAll(".email-link").forEach(function (link) {
    const user = "ericnnguyen2109";
    const domain = "gmail";
    const tld = "com";
    const email = user + "@" + domain + "." + tld;

    link.textContent = email;

    link.addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href = "mailto:" + email;
    });
  });
})();


(function () {
  "use strict";

  const modal = document.getElementById("videoModal");
  const frame = document.getElementById("videoFrame");
  const closeBtn = modal?.querySelector(".video-modal-close");
  const backdrop = modal?.querySelector(".video-modal-backdrop");

  if (!modal || !frame) return;

  document.querySelectorAll(".supporting-media-trigger").forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      const videoId = trigger.dataset.video;

      if (!videoId) return;

      frame.src =
        "https://www.youtube.com/embed/" +
        videoId +
        "?autoplay=1&rel=0";

      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("video-modal-open");
    });
  });

  function closeVideo() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");

    // Stop playback when closing
    frame.src = "";

    document.body.classList.remove("video-modal-open");
  }

  closeBtn?.addEventListener("click", closeVideo);
  backdrop?.addEventListener("click", closeVideo);

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      closeVideo();
    }
  });
})();



document.addEventListener('DOMContentLoaded', function () {

  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('imageModalImage');
  const modalTitle = document.getElementById('imageModalTitle');
  const modalDescription = document.getElementById('imageModalDescription');
  const closeButton = document.getElementById('imageModalClose');

  if (!modal) {
    console.error('Image modal: #imageModal not found.');
    return;
  }

  const images = document.querySelectorAll('.js-image-modal');

  console.log('Image modal initialized.');
  console.log('Clickable images found:', images.length);


  /* Open modal */
  images.forEach(function (figure) {

    figure.addEventListener('click', function () {

      const image = figure.querySelector('img');

      if (!image) return;

      modalImage.src =
      figure.dataset.modalImage ||
      image.currentSrc ||
      image.src;
      modalImage.alt = image.alt || '';

      modalTitle.textContent =
        figure.dataset.title || 'ÆRA Sports';

      modalDescription.textContent =
        figure.dataset.description || '';

      modal.showModal();

    });

  });


  /* Close button */
  closeButton.addEventListener('click', function () {
    modal.close();
  });


  /* Click outside the white modal content */
  modal.addEventListener('click', function (event) {

    if (event.target === modal) {
      modal.close();
    }

  });


  /* Clear image when closed */
  modal.addEventListener('close', function () {
    modalImage.src = '';
  });

});

