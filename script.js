/* =====================================================
   GAYATRI CHATARKAR
   DEVELOPER PORTFOLIO - MAIN JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =================================================
       ELEMENTS
    ================================================= */

    const body = document.body;

    const themeToggle =
        document.querySelector("#theme-toggle");

    const menuToggle =
        document.querySelector("#menu-toggle");

    const navMenu =
        document.querySelector("#nav-menu");

    const navLinks =
        document.querySelectorAll(".nav-link");

    const typingText =
        document.querySelector("#typing-text");

    const scrollTop =
        document.querySelector("#scroll-top");


    /* =================================================
       DARK / LIGHT MODE
    ================================================= */

    const savedTheme =
        localStorage.getItem("portfolio-theme");

    if (savedTheme === "dark") {

        body.classList.add("dark");

        if (themeToggle) {
            themeToggle.textContent = "☀️";
        }

    } else {

        body.classList.remove("dark");

        if (themeToggle) {
            themeToggle.textContent = "🌙";
        }

    }


    if (themeToggle) {

        themeToggle.addEventListener(
            "click",
            () => {

                body.classList.toggle("dark");

                const darkMode =
                    body.classList.contains("dark");

                localStorage.setItem(
                    "portfolio-theme",
                    darkMode
                        ? "dark"
                        : "light"
                );

                themeToggle.textContent =
                    darkMode
                        ? "☀️"
                        : "🌙";

            }
        );

    }


    /* =================================================
       MOBILE MENU
    ================================================= */

    if (menuToggle && navMenu) {

        menuToggle.addEventListener(
            "click",
            () => {

                navMenu.classList.toggle(
                    "active"
                );

                menuToggle.classList.toggle(
                    "active"
                );

            }
        );

    }


    /* =================================================
       CLOSE MOBILE MENU
    ================================================= */

    navLinks.forEach(link => {

        link.addEventListener(
            "click",
            () => {

                if (navMenu) {

                    navMenu.classList.remove(
                        "active"
                    );

                }

                if (menuToggle) {

                    menuToggle.classList.remove(
                        "active"
                    );

                }

            }
        );

    });


    /* =================================================
       TYPING ANIMATION
    ================================================= */

    if (typingText) {

        const roles = [

            "Web Developer",

            "Java Developer",

            "Android Developer",

            "Full Stack Developer",

            "Creative Developer"

        ];

        let roleIndex = 0;

        let characterIndex = 0;

        let deleting = false;


        function typeEffect() {

            const currentRole =
                roles[roleIndex];


            if (!deleting) {

                typingText.textContent =
                    currentRole.substring(
                        0,
                        characterIndex + 1
                    );

                characterIndex++;


                if (
                    characterIndex ===
                    currentRole.length
                ) {

                    deleting = true;

                    setTimeout(
                        typeEffect,
                        1500
                    );

                    return;

                }

            } else {

                typingText.textContent =
                    currentRole.substring(
                        0,
                        characterIndex - 1
                    );

                characterIndex--;


                if (characterIndex === 0) {

                    deleting = false;

                    roleIndex++;

                    if (
                        roleIndex >=
                        roles.length
                    ) {

                        roleIndex = 0;

                    }

                }

            }


            setTimeout(
                typeEffect,
                deleting
                    ? 60
                    : 110
            );

        }


        typeEffect();

    }


    /* =================================================
       SCROLL REVEAL ANIMATION
    ================================================= */

    const revealElements =
        document.querySelectorAll(
            ".reveal, .section, .project-card, .certificate-card, .skill-card"
        );


    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "show"
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(
        element => {

            revealObserver.observe(
                element
            );

        }
    );


    /* =================================================
       ACTIVE NAVIGATION
    ================================================= */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );


    window.addEventListener(
        "scroll",
        () => {

            let currentSection = "";


            sections.forEach(
                section => {

                    const sectionTop =
                        section.offsetTop - 150;


                    if (
                        window.scrollY >=
                        sectionTop
                    ) {

                        currentSection =
                            section.getAttribute(
                                "id"
                            );

                    }

                }
            );


            navLinks.forEach(
                link => {

                    link.classList.remove(
                        "active"
                    );


                    const href =
                        link.getAttribute(
                            "href"
                        );


                    if (
                        href ===
                        `#${currentSection}`
                    ) {

                        link.classList.add(
                            "active"
                        );

                    }

                }
            );

        }
    );


    /* =================================================
       SCROLL TO TOP
    ================================================= */

    if (scrollTop) {

        window.addEventListener(
            "scroll",
            () => {

                if (
                    window.scrollY >
                    500
                ) {

                    scrollTop.classList.add(
                        "show"
                    );

                } else {

                    scrollTop.classList.remove(
                        "show"
                    );

                }

            }
        );


        scrollTop.addEventListener(
            "click",
            () => {

                window.scrollTo({

                    top: 0,

                    behavior: "smooth"

                });

            }
        );

    }


    /* =================================================
       SMOOTH SCROLL
    ================================================= */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(
        link => {

            link.addEventListener(
                "click",
                event => {

                    const targetId =
                        link.getAttribute(
                            "href"
                        );


                    if (
                        targetId === "#"
                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (target) {

                        event.preventDefault();


                        target.scrollIntoView({

                            behavior:
                                "smooth",

                            block:
                                "start"

                        });

                    }

                }
            );

        }
    );


    /* =================================================
       PROJECT CARD TILT EFFECT
    ================================================= */

    const projectCards =
        document.querySelectorAll(
            ".project-card"
        );


    projectCards.forEach(
        card => {

            card.addEventListener(
                "mousemove",
                event => {

                    const rect =
                        card.getBoundingClientRect();


                    const x =
                        event.clientX -
                        rect.left;


                    const y =
                        event.clientY -
                        rect.top;


                    const centerX =
                        rect.width / 2;


                    const centerY =
                        rect.height / 2;


                    const rotateX =
                        (y - centerY) /
                        20;


                    const rotateY =
                        (centerX - x) /
                        20;


                    card.style.transform =
                        `
                        perspective(1000px)
                        rotateX(${rotateX}deg)
                        rotateY(${rotateY}deg)
                        translateY(-8px)
                        `;

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.transform =
                        "";

                }
            );

        }
    );


    /* =================================================
       SKILL CARD HOVER
    ================================================= */

    const skillCards =
        document.querySelectorAll(
            ".skill-card"
        );


    skillCards.forEach(
        card => {

            card.addEventListener(
                "mouseenter",
                () => {

                    card.classList.add(
                        "skill-hover"
                    );

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.classList.remove(
                        "skill-hover"
                    );

                }
            );

        }
    );


    /* =================================================
       CERTIFICATE IMAGE MODAL
    ================================================= */

    const certificateImages =
        document.querySelectorAll(
            ".certificate-card img"
        );


    certificateImages.forEach(
        image => {

            image.addEventListener(
                "click",
                () => {

                    const modal =
                        document.createElement(
                            "div"
                        );


                    modal.className =
                        "image-modal";


                    modal.innerHTML = `

                        <div class="modal-content">

                            <button
                                class="modal-close"
                            >
                                ×
                            </button>

                            <img
                                src="${image.src}"
                                alt="Certificate"
                            >

                        </div>

                    `;


                    document.body.appendChild(
                        modal
                    );


                    requestAnimationFrame(
                        () => {

                            modal.classList.add(
                                "active"
                            );

                        }
                    );


                    const closeButton =
                        modal.querySelector(
                            ".modal-close"
                        );


                    closeButton.addEventListener(
                        "click",
                        () => {

                            modal.remove();

                        }
                    );


                    modal.addEventListener(
                        "click",
                        event => {

                            if (
                                event.target ===
                                modal
                            ) {

                                modal.remove();

                            }

                        }
                    );

                }
            );

        }
    );


    /* =================================================
       CONTACT FORM
    ================================================= */

    const contactForm =
        document.querySelector(
            "#contact-form"
        );


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                const name =
                    document.querySelector(
                        "#name"
                    )?.value.trim();


                const email =
                    document.querySelector(
                        "#email"
                    )?.value.trim();


                const message =
                    document.querySelector(
                        "#message"
                    )?.value.trim();


                if (
                    !name ||
                    !email ||
                    !message
                ) {

                    showMessage(
                        "Please fill all fields."
                    );

                    return;

                }


                showMessage(
                    "Thank you! Your message is ready to send. 💜"
                );


                contactForm.reset();

            }
        );

    }


    /* =================================================
       MESSAGE POPUP
    ================================================= */

    function showMessage(message) {

        const old =
            document.querySelector(
                ".portfolio-message"
            );


        if (old) {

            old.remove();

        }


        const box =
            document.createElement(
                "div"
            );


        box.className =
            "portfolio-message";


        box.textContent =
            message;


        document.body.appendChild(
            box
        );


        setTimeout(
            () => {

                box.classList.add(
                    "hide"
                );


                setTimeout(
                    () => {

                        box.remove();

                    },
                    300
                );

            },
            2500
        );

    }


    /* =================================================
       PAGE LOADER
    ================================================= */

    window.addEventListener(
        "load",
        () => {

            document.body.classList.add(
                "page-loaded"
            );

        }
    );


    /* =================================================
       PARALLAX HERO
    ================================================= */

    const heroImage =
        document.querySelector(
            ".hero-image"
        );


    if (heroImage) {

        window.addEventListener(
            "scroll",
            () => {

                const scroll =
                    window.scrollY;


                if (scroll < 700) {

                    heroImage.style.transform =
                        `translateY(
                            ${scroll * 0.08}px
                        )`;

                }

            }
        );

    }


    /* =================================================
       CURSOR GLOW
    ================================================= */

    const cursorGlow =
        document.querySelector(
            ".cursor-glow"
        );


    if (cursorGlow) {

        document.addEventListener(
            "mousemove",
            event => {

                cursorGlow.style.left =
                    `${event.clientX}px`;

                cursorGlow.style.top =
                    `${event.clientY}px`;

            }
        );

    }


    /* =================================================
       YEAR
    ================================================= */

    const yearElement =
        document.querySelector(
            "#current-year"
        );


    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }

});