/* =====================================================
   WEDDING WEBSITE
   MANSI & DR. NISHU
===================================================== */


/* ================= OPEN INVITATION ================= */

function openInvitation() {

    const overlay =
        document.getElementById("welcomeOverlay");

    const music =
        document.getElementById("bgMusic");

    const icon =
        document.getElementById("musicIcon");


    music.play()
        .then(() => {

            icon.classList.remove("fa-music");

            icon.classList.add("fa-volume-high");

        })
        .catch(() => {

            console.log(
                "Music autoplay blocked by browser."
            );

        });


    overlay.style.opacity = "0";

    overlay.style.visibility = "hidden";

    setTimeout(() => {

        overlay.style.display = "none";

    }, 700);

}


/* ================= COUNTDOWN ================= */

const weddingDate =
    new Date(
        "November 26, 2026 00:00:00"
    ).getTime();


const countdownTimer =
    setInterval(function () {

        const now =
            new Date().getTime();

        const distance =
            weddingDate - now;


        if (distance <= 0) {

            clearInterval(countdownTimer);

            const grid =
                document.querySelector(
                    ".countdown-grid"
                );

            if (grid) {

                grid.innerHTML =
                    `
                    <div class="wedding-arrived">
                        ❤️ The Wedding Day Has Arrived! ❤️
                    </div>
                    `;

            }

            return;
        }


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


        const mins =
            Math.floor(
                (distance %
                (1000 * 60 * 60)) /
                (1000 * 60)
            );


        const secs =
            Math.floor(
                (distance %
                (1000 * 60)) /
                1000
            );


        updateNumber(
            "days",
            days
        );

        updateNumber(
            "hours",
            hours
        );

        updateNumber(
            "mins",
            mins
        );

        updateNumber(
            "secs",
            secs
        );

    }, 1000);


function updateNumber(
    id,
    number
) {

    const element =
        document.getElementById(id);

    if (!element) return;

    element.innerHTML =
        number < 10
            ? "0" + number
            : number;
}


/* ================= MUSIC ================= */

function toggleMusic() {

    const music =
        document.getElementById("bgMusic");

    const icon =
        document.getElementById("musicIcon");


    if (music.paused) {

        music.play()
            .then(() => {

                icon.classList.remove(
                    "fa-music"
                );

                icon.classList.add(
                    "fa-volume-high"
                );

            });

    } else {

        music.pause();

        icon.classList.remove(
            "fa-volume-high"
        );

        icon.classList.add(
            "fa-music"
        );

    }

}


/* ================= PHOTO SLIDER ================= */

let slideIndex = 0;

let slideTimer;


function showSlide(index) {

    const slides =
        document.querySelectorAll(
            ".slide"
        );


    if (!slides.length) return;


    if (index >= slides.length) {

        slideIndex = 0;

    }

    if (index < 0) {

        slideIndex =
            slides.length - 1;

    }


    slides.forEach(
        slide => {

            slide.classList.remove(
                "active"
            );

        }
    );


    slides[slideIndex]
        .classList.add(
            "active"
        );

}


function changeSlide(direction) {

    const slides =
        document.querySelectorAll(
            ".slide"
        );


    if (!slides.length) return;


    slideIndex += direction;

    showSlide(slideIndex);

    restartSlider();

}


function autoSlide() {

    const slides =
        document.querySelectorAll(
            ".slide"
        );


    if (!slides.length) return;


    slideIndex++;

    if (
        slideIndex >=
        slides.length
    ) {

        slideIndex = 0;

    }


    showSlide(slideIndex);

}


function restartSlider() {

    clearInterval(
        slideTimer
    );

    slideTimer =
        setInterval(
            autoSlide,
            3500
        );

}


document.addEventListener(
    "DOMContentLoaded",
    function () {

        showSlide(0);

        restartSlider();

    }
);


/* ================= WHATSAPP WISHES ================= */

function sendToWhatsApp(event) {

    event.preventDefault();


    const name =
        document.getElementById(
            "wishName"
        ).value.trim();


    const phone =
        document.getElementById(
            "wishPhone"
        ).value.trim();


    const message =
        document.getElementById(
            "wishMessage"
        ).value.trim();


    const targetNumber =
        "918084296708";


    const text =
        `Name: ${name}
Phone: ${phone}
Wish: ${message}`;


    const whatsappUrl =
        `https://wa.me/${targetNumber}?text=${encodeURIComponent(text)}`;


    window.open(
        whatsappUrl,
        "_blank"
    );

}


/* ================= VIDEO ================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const video =
            document.getElementById(
                "preWeddingVideo"
            );


        if (!video) return;


        video.addEventListener(
            "error",
            function () {

                console.log(
                    "Pre-wedding video not found."
                );

            }
        );

    }
);
