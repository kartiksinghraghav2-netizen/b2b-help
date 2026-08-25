/* =========================================================
   B2B HELP
   Main JavaScript
   Premium E-commerce & Digital Growth Website
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const header = document.querySelector(".site-header");
    const menuButton = document.getElementById("mobileMenuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    const mobileLinks = mobileMenu
        ? mobileMenu.querySelectorAll("a")
        : [];

    const navLinks = document.querySelectorAll(
        ".desktop-nav a"
    );

    const sections = document.querySelectorAll(
        "main section[id]"
    );


    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    const closeMobileMenu = () => {

        if (!mobileMenu || !menuButton) return;

        mobileMenu.classList.remove("active");

        document.body.classList.remove(
            "menu-open"
        );

        const icon =
            menuButton.querySelector("i");

        if (icon) {

            icon.classList.remove(
                "fa-xmark"
            );

            icon.classList.add(
                "fa-bars"
            );

        }

        menuButton.setAttribute(
            "aria-label",
            "Open menu"
        );

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );
    };


    const openMobileMenu = () => {

        if (!mobileMenu || !menuButton) return;

        mobileMenu.classList.add("active");

        document.body.classList.add(
            "menu-open"
        );

        const icon =
            menuButton.querySelector("i");

        if (icon) {

            icon.classList.remove(
                "fa-bars"
            );

            icon.classList.add(
                "fa-xmark"
            );

        }

        menuButton.setAttribute(
            "aria-label",
            "Close menu"
        );

        menuButton.setAttribute(
            "aria-expanded",
            "true"
        );
    };


    if (menuButton && mobileMenu) {

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );


        menuButton.addEventListener(
            "click",
            () => {

                const isOpen =
                    mobileMenu.classList.contains(
                        "active"
                    );

                if (isOpen) {

                    closeMobileMenu();

                } else {

                    openMobileMenu();

                }

            }
        );


        mobileLinks.forEach((link) => {

            link.addEventListener(
                "click",
                () => {

                    closeMobileMenu();

                }
            );

        });


        document.addEventListener(
            "click",
            (event) => {

                if (
                    !mobileMenu.classList.contains(
                        "active"
                    )
                ) {
                    return;
                }


                const clickedMenu =
                    mobileMenu.contains(
                        event.target
                    );

                const clickedButton =
                    menuButton.contains(
                        event.target
                    );


                if (
                    !clickedMenu &&
                    !clickedButton
                ) {

                    closeMobileMenu();

                }

            }
        );


        document.addEventListener(
            "keydown",
            (event) => {

                if (
                    event.key === "Escape"
                ) {

                    closeMobileMenu();

                }

            }
        );

    }


    /* =====================================================
       HEADER SCROLL EFFECT
    ===================================================== */

    const handleHeaderScroll = () => {

        if (!header) return;

        if (window.scrollY > 20) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );

        }

    };


    window.addEventListener(
        "scroll",
        handleHeaderScroll,
        {
            passive: true
        }
    );


    handleHeaderScroll();


    /* =====================================================
       SMOOTH ANCHOR SCROLL
    ===================================================== */

    const anchorLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    anchorLinks.forEach((link) => {

        link.addEventListener(
            "click",
            (event) => {

                const targetId =
                    link.getAttribute(
                        "href"
                    );


                if (
                    !targetId ||
                    targetId === "#"
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) {

                    return;

                }


                event.preventDefault();


                const headerHeight =
                    header
                        ? header.offsetHeight
                        : 0;


                const targetTop =
                    target.getBoundingClientRect()
                        .top +
                    window.scrollY -
                    headerHeight -
                    12;


                window.scrollTo({

                    top: targetTop,

                    behavior: "smooth"

                });

            }
        );

    });


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    if (
        sections.length &&
        navLinks.length
    ) {

        const sectionObserver =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                !entry.isIntersecting
                            ) {

                                return;

                            }


                            const id =
                                entry.target
                                    .getAttribute(
                                        "id"
                                    );


                            navLinks.forEach(
                                (link) => {

                                    const target =
                                        link.getAttribute(
                                            "href"
                                        );


                                    link.classList.toggle(
                                        "active",
                                        target ===
                                        `#${id}`
                                    );

                                }
                            );

                        }
                    );

                },
                {
                    threshold: 0.25,

                    rootMargin:
                        "-90px 0px -50% 0px"
                }
            );


        sections.forEach(
            (section) => {

                sectionObserver.observe(
                    section
                );

            }
        );

    }


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            `
            .section-heading,
            .about-content,
            .highlight-card,
            .service-card,
            .marketplace-card,
            .why-content,
            .why-feature,
            .cta-card,
            .trust-strip
            `
        );


    revealElements.forEach(
        (element) => {

            element.classList.add(
                "scroll-reveal"
            );

        }
    );


    if (
        "IntersectionObserver"
        in window
    ) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                !entry.isIntersecting
                            ) {

                                return;

                            }


                            entry.target.classList.add(
                                "revealed"
                            );


                            observer.unobserve(
                                entry.target
                            );

                        }
                    );

                },
                {
                    threshold: 0.12,

                    rootMargin:
                        "0px 0px -45px 0px"
                }
            );


        revealElements.forEach(
            (element) => {

                revealObserver.observe(
                    element
                );

            }
        );

    } else {

        revealElements.forEach(
            (element) => {

                element.classList.add(
                    "revealed"
                );

            }
        );

    }


    /* =====================================================
       STAGGER CARDS
    ===================================================== */

    const cardGroups = [
        ".services-grid .service-card",
        ".marketplace-grid .marketplace-card",
        ".about-highlights .highlight-card",
        ".why-features .why-feature"
    ];


    cardGroups.forEach(
        (selector) => {

            const cards =
                document.querySelectorAll(
                    selector
                );


            cards.forEach(
                (card, index) => {

                    card.style.transitionDelay =
                        `${index * 90}ms`;

                }
            );

        }
    );


    /* =====================================================
       HERO DASHBOARD COUNTERS
    ===================================================== */

    const dashboard =
        document.querySelector(
            ".dashboard-card"
        );


    const counterElements =
        document.querySelectorAll(
            ".dashboard-stat strong"
        );


    const animateNumber = (
        element,
        target,
        duration = 1100
    ) => {

        if (!element) return;


        const startTime =
            performance.now();


        const update = (
            currentTime
        ) => {

            const elapsed =
                currentTime -
                startTime;


            const progress =
                Math.min(
                    elapsed / duration,
                    1
                );


            const eased =
                1 -
                Math.pow(
                    1 - progress,
                    3
                );


            const value =
                Math.round(
                    target * eased
                );


            element.textContent =
                String(value).padStart(
                    2,
                    "0"
                );


            if (
                progress < 1
            ) {

                requestAnimationFrame(
                    update
                );

            }

        };


        requestAnimationFrame(
            update
        );

    };


    if (
        dashboard &&
        counterElements.length &&
        "IntersectionObserver"
        in window
    ) {

        let counterStarted =
            false;


        const dashboardObserver =
            new IntersectionObserver(
                (entries) => {

                    if (
                        counterStarted
                    ) {

                        return;

                    }


                    entries.forEach(
                        (entry) => {

                            if (
                                !entry.isIntersecting
                            ) {

                                return;

                            }


                            counterStarted =
                                true;


                            /*
                             * First dashboard
                             * metric = 04
                             */

                            animateNumber(
                                counterElements[0],
                                4
                            );


                            dashboardObserver.disconnect();

                        }
                    );

                },
                {
                    threshold: 0.4
                }
            );


        dashboardObserver.observe(
            dashboard
        );

    }


    /* =====================================================
       BUTTON RIPPLE EFFECT
    ===================================================== */

    const buttons =
        document.querySelectorAll(
            ".btn"
        );


    buttons.forEach(
        (button) => {

            button.addEventListener(
                "click",
                function (event) {

                    const ripple =
                        document.createElement(
                            "span"
                        );


                    const rect =
                        this.getBoundingClientRect();


                    const size =
                        Math.max(
                            rect.width,
                            rect.height
                        );


                    ripple.style.width =
                        `${size}px`;

                    ripple.style.height =
                        `${size}px`;

                    ripple.style.position =
                        "absolute";

                    ripple.style.left =
                        `${event.clientX - rect.left - size / 2}px`;

                    ripple.style.top =
                        `${event.clientY - rect.top - size / 2}px`;

                    ripple.style.borderRadius =
                        "50%";

                    ripple.style.background =
                        "rgba(255,255,255,.22)";

                    ripple.style.pointerEvents =
                        "none";

                    ripple.style.transform =
                        "scale(0)";

                    ripple.style.animation =
                        "buttonRipple .6s ease-out";


                    const computed =
                        window.getComputedStyle(
                            this
                        );


                    if (
                        computed.position ===
                        "static"
                    ) {

                        this.style.position =
                            "relative";

                    }


                    this.style.overflow =
                        "hidden";


                    this.appendChild(
                        ripple
                    );


                    setTimeout(
                        () => {

                            ripple.remove();

                        },
                        650
                    );

                }
            );

        }
    );


    /* =====================================================
       CLOSE MENU ON RESIZE
    ===================================================== */

    window.addEventListener(
        "resize",
        () => {

            if (
                window.innerWidth > 850
            ) {

                closeMobileMenu();

            }

        }
    );


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const yearElements =
        document.querySelectorAll(
            "[data-current-year]"
        );


    yearElements.forEach(
        (element) => {

            element.textContent =
                new Date()
                    .getFullYear();

        }
    );


    /* =====================================================
       EXTERNAL LINK SAFETY
    ===================================================== */

    const externalLinks =
        document.querySelectorAll(
            'a[target="_blank"]'
        );


    externalLinks.forEach(
        (link) => {

            link.setAttribute(
                "rel",
                "noopener noreferrer"
            );

        }
    );


    /* =====================================================
       REDUCE MOTION SUPPORT
    ===================================================== */

    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (
        prefersReducedMotion
    ) {

        document.documentElement
            .classList.add(
                "reduce-motion"
            );

    }


    /* =====================================================
       PAGE READY
    ===================================================== */

    document.body.classList.add(
        "page-ready"
    );

});
