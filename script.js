const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const nav = document.querySelector(".nav");
const contactForm = document.getElementById("contactForm");
const contactStatus = document.getElementById("contactStatus");
const viewWorkBtn = document.getElementById("viewWorkBtn");
const workStatus = document.getElementById("workStatus");
const yearEl = document.getElementById("year");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

function smoothScrollTo(element, duration = 800) {
  const startY = window.scrollY;
  const targetY = element.getBoundingClientRect().top + startY;
  const distance = targetY - startY;
  const startTime = performance.now();

  function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  function animate(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutQuad(progress);
    window.scrollTo(0, startY + distance * eased);

    if (progress < 1) {
      window.requestAnimationFrame(animate);
    }
  }

  window.requestAnimationFrame(animate);
}

if (viewWorkBtn && workStatus) {
  viewWorkBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      smoothScrollTo(projectsSection, 1000);
    }

    workStatus.textContent = "Taking you to my work...";
    workStatus.classList.add("is-visible");

    window.setTimeout(() => {
      workStatus.classList.remove("is-visible");
      workStatus.textContent = "";
    }, 2000);
  });
}

if (navToggle && navMenu && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    nav.classList.toggle("nav--open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navMenu.querySelectorAll(".nav__link").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("is-open");
      nav.classList.remove("nav--open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (contactForm && contactStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    contactStatus.textContent = "Thanks! Your message has been received.";
    contactForm.reset();
  });
}
