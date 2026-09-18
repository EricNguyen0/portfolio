/* =========================================================
   ERIC NGUYEN — PORTFOLIO (High-Performance Engine)
   Consolidated modules: Theme, i18n, Nav, Video Modal,
   Image Modal, Swiper, and Observers.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const root = document.documentElement;

  /* ---------------- 1. Theme Management ---------------- */
  const storedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const currentTheme = storedTheme || (prefersDark ? "dark" : "light");
  root.setAttribute("data-theme", currentTheme);

  const updateThemeLabel = () => {
    const btn = document.querySelector("[data-theme-toggle]");
    if (btn) btn.textContent = root.getAttribute("data-theme") === "dark" ? "LIGHT" : "DARK";
  };
  updateThemeLabel();

  /* ---------------- 2. Language / i18n System ---------------- */
  let currentLang = localStorage.getItem("lang") || "en";

  const applyLang = (lang) => {
    root.setAttribute("lang", lang);

    // Text content
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const dict = window.I18N?.[key];
      if (dict?.[lang]) el.innerHTML = dict[lang];
    });

    // Dynamic attributes
    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      const pairs = el.getAttribute("data-i18n-attr").split(",");
      pairs.forEach((pair) => {
        const [attr, key] = pair.split(":").map((s) => s.trim());
        const dict = window.I18N?.[key];
        if (dict?.[lang]) el.setAttribute(attr, dict[lang]);
      });
    });

    const btn = document.querySelector("[data-lang-toggle]");
    if (btn) btn.textContent = lang === "en" ? "FR" : "EN";
  };

  applyLang(currentLang);

  /* ---------------- 3. Global Click Delegation ---------------- */
  // Handles theme toggle, lang toggle, menu toggle, and modal triggers cleanly without extra listeners
  document.addEventListener("click", (e) => {
    // Theme Toggle
    if (e.target.closest("[data-theme-toggle]")) {
      const nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", nextTheme);
      localStorage.setItem("theme", nextTheme);
      updateThemeLabel();
      return;
    }

    // Language Toggle
    if (e.target.closest("[data-lang-toggle]")) {
      currentLang = currentLang === "en" ? "fr" : "en";
      localStorage.setItem("lang", currentLang);
      applyLang(currentLang);
      return;
    }

    // Mobile Navigation Toggle
    if (e.target.closest("[data-menu-toggle]")) {
      const nav = document.querySelector(".nav-links");
      if (nav) nav.classList.toggle("open");
      return;
    }

    // Mobile Navigation Close on Link Click
    if (e.target.closest(".nav-links a")) {
      const nav = document.querySelector(".nav-links");
      if (nav) nav.classList.remove("open");
      return;
    }

    // Video Modal Trigger
    const videoTrigger = e.target.closest(".supporting-media-trigger");
    if (videoTrigger) {
      openVideoModal(videoTrigger.dataset.video);
      return;
    }

    // Image Modal Trigger
    const imageTrigger = e.target.closest(".js-image-modal");
    if (imageTrigger) {
      openImageModal(imageTrigger);
      return;
    }
  });

  /* ---------------- 4. Email Obfuscation ---------------- */
  document.querySelectorAll(".email-link").forEach((link) => {
    const email = "ericnnguyen2109@gmail.com";
    link.textContent = email;
    link.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = `mailto:${email}`;
    });
  });

  /* ---------------- 5. Intersection Observer Navigation ---------------- */
  const sections = document.querySelectorAll("[data-cs-section]");
  const navLinks = document.querySelectorAll(".cs-nav-strip a");

  if (sections.length && navLinks.length && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((l) => l.classList.remove("active"));
            const match = document.querySelector(`.cs-nav-strip a[href="#${entry.target.id}"]`);
            if (match) match.classList.add("active");
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
  }

  /* ---------------- 6. Lightweight Swiper Engine ---------------- */
  document.querySelectorAll("[data-swiper]").forEach((swiper) => {
    const track = swiper.querySelector(".swiper-track");
    const slides = swiper.querySelectorAll(".swiper-slide");
    const dots = swiper.querySelectorAll(".dot");
    const prevBtn = swiper.querySelector("[data-swiper-prev]");
    const nextBtn = swiper.querySelector("[data-swiper-next]");

    if (!track || !slides.length) return;

    const goTo = (index) => {
      const targetIndex = Math.max(0, Math.min(index, slides.length - 1));
      track.scrollTo({ left: slides[targetIndex].offsetLeft, behavior: "smooth" });
    };

    const getCurrentIndex = () => {
      const scrollLeft = track.scrollLeft;
      let closest = 0;
      let closestDist = Infinity;
      slides.forEach((s, i) => {
        const dist = Math.abs(s.offsetLeft - scrollLeft);
        if (dist < closestDist) {
          closestDist = dist;
          closest = i;
        }
      });
      return closest;
    };

    const updateDots = () => {
      const idx = getCurrentIndex();
      dots.forEach((d, i) => d.classList.toggle("active", i === idx));
    };

    prevBtn?.addEventListener("click", () => goTo(getCurrentIndex() - 1));
    nextBtn?.addEventListener("click", () => goTo(getCurrentIndex() + 1));
    dots.forEach((d, i) => d.addEventListener("click", () => goTo(i)));

    // Debounced scroll listener with passive performance enhancement
    let scrollTimer;
    track.addEventListener(
      "scroll",
      () => {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(updateDots, 60);
      },
      { passive: true }
    );

    updateDots();
  });

  /* ---------------- 7. Video Modal Module ---------------- */
  const videoModal = document.getElementById("videoModal");
  const videoFrame = document.getElementById("videoFrame");
  const videoCloseBtn = videoModal?.querySelector(".video-modal-close");
  const videoBackdrop = videoModal?.querySelector(".video-modal-backdrop");

  function openVideoModal(videoId) {
    if (!videoModal || !videoFrame || !videoId) return;
    videoFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    videoModal.classList.add("is-open");
    videoModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("video-modal-open");
  }

  function closeVideoModal() {
    if (!videoModal) return;
    videoModal.classList.remove("is-open");
    videoModal.setAttribute("aria-hidden", "true");
    if (videoFrame) videoFrame.src = ""; // Ceases background playback audio
    document.body.classList.remove("video-modal-open");
  }

  videoCloseBtn?.addEventListener("click", closeVideoModal);
  videoBackdrop?.addEventListener("click", closeVideoModal);

  /* ---------------- 8. Native Image Modal (<dialog>) ---------------- */
  const imgModal = document.getElementById("imageModal");
  const modalImage = document.getElementById("imageModalImage");
  const modalTitle = document.getElementById("imageModalTitle");
  const modalDescription = document.getElementById("imageModalDescription");
  const imgCloseBtn = document.getElementById("imageModalClose");

  function openImageModal(figure) {
    if (!imgModal) return;
    const img = figure.querySelector("img");
    if (!img) return;

    if (modalImage) {
      modalImage.src = figure.dataset.modalImage || img.currentSrc || img.src;
      modalImage.alt = img.alt || "";
    }
    if (modalTitle) modalTitle.textContent = figure.dataset.title || "ÆRA Sports";
    if (modalDescription) modalDescription.textContent = figure.dataset.description || "";

    imgModal.showModal();
  }

  imgCloseBtn?.addEventListener("click", () => imgModal?.close());

  imgModal?.addEventListener("click", (e) => {
    if (e.target === imgModal) imgModal.close();
  });

  imgModal?.addEventListener("close", () => {
    if (modalImage) modalImage.src = "";
  });

  /* ---------------- 9. Global Escape Key Listener ---------------- */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (videoModal?.classList.contains("is-open")) {
        closeVideoModal();
      }
    }
  });
});