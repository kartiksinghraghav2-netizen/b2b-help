/* =========================================================
   B2B HELP
   Main JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       1. MOBILE MENU
       ===================================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector(".main-nav");

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", () => {

            mainNav.classList.toggle("mobile-open");

            const isOpen = mainNav.classList.contains("mobile-open");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        });


        /* Close menu after clicking a link */

        const navLinks = mainNav.querySelectorAll("a");

        navLinks.forEach(link => {

            link.addEventListener("click", () => {

                mainNav.classList.remove("mobile-open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });


        /* Close menu when clicking outside */

        document.addEventListener("click", event => {

            const clickedInsideMenu =
                mainNav.contains(event.target);

            const clickedToggle =
                menuToggle.contains(event.target);

            if (
                !clickedInsideMenu &&
                !clickedToggle
            ) {

                mainNav.classList.remove("mobile-open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });

    }


    /* =====================================================
       2. HEADER SCROLL EFFECT
       ===================================================== */

    const header = document.querySelector(".site-header");

    if (header) {

        const handleHeaderScroll = () => {

            if (window.scrollY > 20) {

                header.classList.add("scrolled");

            } else {

                header.classList.remove("scrolled");

            }

        };

        handleHeaderScroll();

        window.addEventListener(
            "scroll",
            handleHeaderScroll,
            { passive: true }
        );

    }


    /* =====================================================
       3. SMOOTH ANCHOR NAVIGATION
       ===================================================== */

    const anchorLinks =
        document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {

        link.addEventListener("click", event => {

            const targetId =
                link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            const headerHeight =
                header ? header.offsetHeight : 0;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                headerHeight -
                15;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        });

    });


    /* =====================================================
       4. ACTIVE NAVIGATION
       ===================================================== */

    const sections =
        document.querySelectorAll("main section[id]");

    const sectionLinks =
        document.querySelectorAll(
            '.main-nav a[href^="#"]'
        );

    if (
        sections.length &&
        sectionLinks.length
    ) {

        const updateActiveNavigation = () => {

            const scrollPosition =
                window.scrollY +
                (header ? header.offsetHeight : 0) +
                100;

            let currentSection = "";

            sections.forEach(section => {

                const sectionTop =
                    section.offsetTop;

                const sectionHeight =
                    section.offsetHeight;

                if (
                    scrollPosition >= sectionTop &&
                    scrollPosition <
                    sectionTop + sectionHeight
                ) {

                    currentSection =
                        section.getAttribute("id");

                }

            });

            sectionLinks.forEach(link => {

                link.classList.remove("active");

                const href =
                    link.getAttribute("href");

                if (
                    currentSection &&
                    href === `#${currentSection}`
                ) {

                    link.classList.add("active");

                }

            });

        };

        updateActiveNavigation();

        window.addEventListener(
            "scroll",
            updateActiveNavigation,
            { passive: true }
        );

    }


    /* =====================================================
       5. SCROLL REVEAL ANIMATION
       ===================================================== */

    const revealElements = document.querySelectorAll(
        ".service-block, " +
        ".marketplace-card, " +
        ".industry-item, " +
        ".process-item, " +
        ".work-card"
    );

    if (
        revealElements.length &&
        "IntersectionObserver" in window
    ) {

        revealElements.forEach(element => {

            element.style.opacity = "0";
            element.style.transform = "translateY(20px)";
            element.style.transition =
                "opacity 0.6s ease, transform 0.6s ease";

        });


        const revealObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (!entry.isIntersecting) {
                            return;
                        }

                        entry.target.style.opacity = "1";
                        entry.target.style.transform =
                            "translateY(0)";

                        revealObserver.unobserve(
                            entry.target
                        );

                    });

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(element => {

            revealObserver.observe(element);

        });

    }


    /* =====================================================
       6. CURRENT YEAR
       ===================================================== */

    const yearElements =
        document.querySelectorAll("[data-year]");

    if (yearElements.length) {

        const currentYear =
            new Date().getFullYear();

        yearElements.forEach(element => {

            element.textContent = currentYear;

        });

    }


    /* =====================================================
       7. EXTERNAL LINKS
       ===================================================== */

    const externalLinks =
        document.querySelectorAll(
            'a[href^="http"]'
        );

    externalLinks.forEach(link => {

        const currentHost =
            window.location.hostname;

        try {

            const linkUrl =
                new URL(link.href);

            if (
                linkUrl.hostname !== currentHost
            ) {

                link.setAttribute(
                    "target",
                    "_blank"
                );

                link.setAttribute(
                    "rel",
                    "noopener noreferrer"
                );

            }

        } catch (error) {

            // Ignore invalid URLs.

        }

    });


    /* =====================================================
       8. CONSOLE MESSAGE
       ===================================================== */

    console.log(
        "B2B Help website loaded successfully."
    );

});
