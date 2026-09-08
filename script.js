/* ==========================================
   MANSI & DR. NISHU
   WEDDING INVITATION - SCRIPT
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ======================================
       WELCOME SCREEN / TAP TO OPEN
    ======================================= */

    const welcomeOverlay = document.getElementById("welcomeOverlay");
    const tapOpenBtn = document.getElementById("tapOpenBtn");

    const bgMusic = document.getElementById("bgMusic");
    const musicToggle = document.getElementById("musicToggle");


    function openInvitation() {

        if (welcomeOverlay) {
            welcomeOverlay.classList.add("opened");
        }

        /*
         * TAP TO OPEN ke baad:
         * welcome screen hide hogi
         * aur HTML me rakha hua
         * post-open-design.png automatically dikhega
         * uske baad countdown dikhega.
         */

        if (bgMusic) {

            bgMusic.volume = 0.45;

            const playPromise = bgMusic.play();

            if (playPromise !== undefined) {

                playPromise.catch(function () {
                    // Browser autoplay restriction
                });

            }

        }

    }


    if (tapOpenBtn) {

        tapOpenBtn.addEventListener("click", function (event) {

            event.stopPropagation();

            openInvitation();

        });

    }


    if (welcomeOverlay) {

        welcomeOverlay.addEventListener("click", function () {

            openInvitation();

        });

    }



    /* ======================================
       MUSIC TOGGLE
    ======================================= */

    if (musicToggle && bgMusic) {

        musicToggle.addEventListener("click", function () {

            if (bgMusic.paused) {

                bgMusic.play()
                    .then(function () {

                        musicToggle.innerHTML =
                            '<i class="fa-solid fa-volume-high"></i>';

                    })
                    .catch(function () {});

            } else {

                bgMusic.pause();

                musicToggle.innerHTML =
                    '<i class="fa-solid fa-volume-xmark"></i>';

            }

        });

    }



    /* ======================================
       WEDDING COUNTDOWN
       26 NOVEMBER 2026 - 07:00 PM
    ======================================= */

    const weddingDate =
        new Date("November 26, 2026 19:00:00").getTime();


    const daysElement =
        document.getElementById("days");

    const hoursElement =
        document.getElementById("hours");

    const minutesElement =
        document.getElementById("minutes");

    const secondsElement =
        document.getElementById("seconds");

    const weddingMessage =
        document.getElementById("weddingDayMessage");


    function updateCountdown() {

        const now =
            new Date().getTime();

        const distance =
            weddingDate - now;


        /* ==================================
           WEDDING DAY ARRIVED
        ================================== */

        if (distance <= 0) {

            if (daysElement) {
                daysElement.textContent = "00";
            }

            if (hoursElement) {
                hoursElement.textContent = "00";
            }

            if (minutesElement) {
                minutesElement.textContent = "00";
            }

            if (secondsElement) {
                secondsElement.textContent = "00";
            }

            if (weddingMessage) {

                weddingMessage.classList.add("show");

            }

            return;

        }


        /* ==================================
           CALCULATE TIME
        ================================== */

        const days =
            Math.floor(
                distance /
                (1000 * 60 * 60 * 24)
            );


        const hours =
            Math.floor(
                (distance %
                    (1000 * 60 * 60 * 24)) /
                (1000 * 60 * 60)
            );


        const minutes =
            Math.floor(
                (distance %
                    (1000 * 60 * 60)) /
                (1000 * 60)
            );


        const seconds =
            Math.floor(
                (distance %
                    (1000 * 60)) /
                1000
            );


        /* ==================================
           SHOW COUNTDOWN
        ================================== */

        if (daysElement) {

            daysElement.textContent =
                String(days).padStart(2, "0");

        }


        if (hoursElement) {

            hoursElement.textContent =
                String(hours).padStart(2, "0");

        }


        if (minutesElement) {

            minutesElement.textContent =
                String(minutes).padStart(2, "0");

        }


        if (secondsElement) {

            secondsElement.textContent =
                String(seconds).padStart(2, "0");

        }

    }


    updateCountdown();


    setInterval(
        updateCountdown,
        1000
    );



    /* ======================================
       PHOTO SLIDER
    ======================================= */

    const slides =
        document.querySelectorAll(".slide");

    const previousButton =
        document.getElementById("prevSlide");

    const nextButton =
        document.getElementById("nextSlide");


    let currentSlide = 0;


    function showSlide(index) {

        if (!slides.length) {
            return;
        }


        if (index >= slides.length) {

            currentSlide = 0;

        } else if (index < 0) {

            currentSlide =
                slides.length - 1;

        } else {

            currentSlide = index;

        }


        slides.forEach(function (slide, i) {

            if (i === currentSlide) {

                slide.classList.add("active");

            } else {

                slide.classList.remove("active");

            }

        });

    }


    if (nextButton) {

        nextButton.addEventListener("click", function () {

            showSlide(
                currentSlide + 1
            );

        });

    }


    if (previousButton) {

        previousButton.addEventListener("click", function () {

            showSlide(
                currentSlide - 1
            );

        });

    }


    showSlide(0);



    /* ======================================
       AUTO PHOTO SLIDER
    ======================================= */

    if (slides.length > 1) {

        setInterval(function () {

            showSlide(
                currentSlide + 1
            );

        }, 4000);

    }



    /* ======================================
       TOUCH SWIPE SLIDER
    ======================================= */

    const slider =
        document.querySelector(".slider-container");


    let touchStartX = 0;
    let touchEndX = 0;


    if (slider) {

        slider.addEventListener(
            "touchstart",
            function (event) {

                touchStartX =
                    event.changedTouches[0].screenX;

            },
            {
                passive: true
            }
        );


        slider.addEventListener(
            "touchend",
            function (event) {

                touchEndX =
                    event.changedTouches[0].screenX;


                const swipeDistance =
                    touchEndX -
                    touchStartX;


                if (
                    Math.abs(swipeDistance) < 50
                ) {

                    return;

                }


                if (swipeDistance < 0) {

                    showSlide(
                        currentSlide + 1
                    );

                } else {

                    showSlide(
                        currentSlide - 1
                    );

                }

            },
            {
                passive: true
            }
        );

    }



    /* ======================================
       PRE-WEDDING HIGHLIGHTS MODAL
    ======================================= */

    const openHighlight =
        document.getElementById("openHighlight");

    const closeHighlight =
        document.getElementById("closeHighlight");

    const highlightModal =
        document.getElementById("highlightModal");


    if (
        openHighlight &&
        highlightModal
    ) {

        openHighlight.addEventListener(
            "click",
            function () {

                highlightModal.classList.add("show");

            }
        );

    }


    if (
        closeHighlight &&
        highlightModal
    ) {

        closeHighlight.addEventListener(
            "click",
            function () {

                highlightModal.classList.remove("show");

            }
        );

    }


    if (highlightModal) {

        highlightModal.addEventListener(
            "click",
            function (event) {

                if (
                    event.target === highlightModal
                ) {

                    highlightModal.classList.remove(
                        "show"
                    );

                }

            }
        );

    }



    /* ======================================
       WHATSAPP BLESSINGS
    ======================================= */

    const blessingForm =
        document.getElementById("blessingForm");


    if (blessingForm) {

        blessingForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const name =
                    document.getElementById(
                        "guestName"
                    ).value.trim();


                const phone =
                    document.getElementById(
                        "guestPhone"
                    ).value.trim();


                const wish =
                    document.getElementById(
                        "guestWish"
                    ).value.trim();


                if (
                    !name ||
                    !phone ||
                    !wish
                ) {

                    alert(
                        "Please fill all the fields."
                    );

                    return;

                }


                const message =
                    "💐 Wedding Blessings 💐\n\n" +
                    "Name: " +
                    name +
                    "\n" +
                    "WhatsApp No.: " +
                    phone +
                    "\n\n" +
                    "Wishes:\n" +
                    wish;


                /*
                 * Family WhatsApp Number
                 */

                const whatsappNumber =
                    "918084296708";


                const whatsappURL =
                    "https://wa.me/" +
                    whatsappNumber +
                    "?text=" +
                    encodeURIComponent(
                        message
                    );


                window.open(
                    whatsappURL,
                    "_blank"
                );

            }
        );

    }



    /* ======================================
       ESC KEY - CLOSE MODAL
    ======================================= */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                highlightModal
            ) {

                highlightModal.classList.remove(
                    "show"
                );

            }

        }
    );



    /* ======================================
       PREVENT IMAGE DRAG
    ======================================= */

    document
        .querySelectorAll("img")
        .forEach(function (image) {

            image.addEventListener(
                "dragstart",
                function (event) {

                    event.preventDefault();

                }
            );

        });



    /* ======================================
       LIVE YOUTUBE VIDEO
    ======================================= */

    const liveFrame =
        document.querySelector(
            ".live-video-wrapper iframe"
        );


    if (liveFrame) {

        liveFrame.src =
            "https://www.youtube.com/embed/crHV8Ly7FI0";

    }



    /* ======================================
       PAGE READY
    ======================================= */

    console.log(
        "Mansi & Dr. Nishu Wedding Website Loaded Successfully ❤️"
    );

});
