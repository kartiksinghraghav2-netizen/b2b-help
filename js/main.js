// ======================================
// COUNTER ANIMATION
// ======================================

const counters = document.querySelectorAll(".counter");

const runCounter = (counter) => {
  const target = Number(counter.dataset.target);
  const speed = 80;

  const updateCounter = () => {
    const current = Number(counter.innerText);

    const increment = Math.ceil(target / speed);

    if (current < target) {
      counter.innerText = Math.min(current + increment, target);
      requestAnimationFrame(updateCounter);
    }
  };

  updateCounter();
};

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        runCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.5,
  }
);

counters.forEach((counter) => {
  counterObserver.observe(counter);
});

// ======================================
// FAQ ACCORDION
// ======================================

const faqButtons = document.querySelectorAll(".faq-btn");

faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;

    document.querySelectorAll(".faq-content").forEach((item) => {
      if (item !== content) {
        item.style.display = "none";
      }
    });

    content.style.display =
      content.style.display === "block"
        ? "none"
        : "block";
  });
});

// ======================================
// SCROLL REVEAL
// ======================================

const revealElements = document.querySelectorAll(
  `
  .market-card,
  .service-card,
  .problem-card,
  .why-card,
  .industry-card,
  .roadmap-card,
  .case-card,
  .testimonial-card,
  .pricing-card,
  .contact-card,
  .metric-box
`
);

revealElements.forEach((element) => {
  element.style.opacity = "0";
  element.style.transform = "translateY(40px)";
  element.style.transition =
    "all 0.8s ease";
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform =
          "translateY(0)";

        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

// ======================================
// NAVBAR SCROLL EFFECT
// ======================================

const navbar =
  document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow =
      "0 10px 40px rgba(0,0,0,.08)";
  } else {
    navbar.style.boxShadow = "none";
  }
});

// ======================================
// MOBILE MENU
// ======================================

const menuButton =
  document.getElementById(
    "mobileMenuBtn"
  );

const desktopNav =
  document.querySelector(
    ".desktop-nav"
  );

if (menuButton) {
  menuButton.addEventListener(
    "click",
    () => {
      desktopNav.classList.toggle(
        "mobile-open"
      );
    }
  );
}

// ======================================
// DEMO FORM
// ======================================

const demoForm =
  document.getElementById("demoForm");

if (demoForm) {
  demoForm.addEventListener(
    "submit",
    (event) => {
      event.preventDefault();

      const button =
        demoForm.querySelector(
          "button"
        );

      const originalText =
        button.innerText;

      button.innerText =
        "Submitting...";

      button.disabled = true;

      setTimeout(() => {
        alert(
          "Thank you! Your demo request has been received. Our team will contact you shortly."
        );

        demoForm.reset();

        button.innerText =
          originalText;

        button.disabled = false;
      }, 1200);
    }
  );
}

// ======================================
// SMOOTH ANCHOR SCROLL
// ======================================

document
  .querySelectorAll('a[href^="#"]')
  .forEach((anchor) => {
    anchor.addEventListener(
      "click",
      function (event) {
        event.preventDefault();

        const target =
          document.querySelector(
            this.getAttribute(
              "href"
            )
          );

        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    );
  });

// ======================================
// HERO FLOATING EFFECT
// ======================================

const dashboard =
  document.querySelector(
    ".dashboard-card"
  );

if (dashboard) {
  let direction = 1;

  setInterval(() => {
    dashboard.style.transform =
      `translateY(${direction * 8}px)`;

    direction *= -1;
  }, 2500);
}

// ======================================
// PAGE LOADED
// ======================================

window.addEventListener("load", () => {
  document.body.classList.add(
    "loaded"
  );
});

console.log(
  "B2B Help Website Loaded Successfully"
);
const mobileMenuBtn =
document.getElementById("mobileMenuBtn");

const mobileMenu =
document.getElementById("mobileMenu");

if (mobileMenuBtn && mobileMenu) {

  mobileMenuBtn.addEventListener(
    "click",
    () => {
      mobileMenu.classList.toggle(
        "active"
      );
    }
  );

}
