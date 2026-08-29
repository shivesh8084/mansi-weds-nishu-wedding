/* ==========================================
   WEDDING INVITATION JAVASCRIPT
========================================== */


/* ==========================================
   OPEN INVITATION + MUSIC
========================================== */

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
        .catch(error => {

            console.log(
                "Music autoplay error:",
                error
            );

        });


    overlay.style.opacity = "0";

    setTimeout(() => {

        overlay.style.display = "none";

    }, 600);
}



/* ==========================================
   COUNTDOWN
========================================== */

const weddingDate =
    new Date(
        "November 26, 2026 19:00:00"
    ).getTime();


function updateCountdown() {

    const now =
        new Date().getTime();

    const distance =
        weddingDate - now;


    if (distance <= 0) {

        document.querySelector(
            ".countdown-grid"
        ).innerHTML = `
            <h3 style="
                color:#ffd700;
                font-family:'Cinzel',serif;
            ">
                The Wedding Day Has Arrived! ❤️
            </h3>
        `;

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


    document.getElementById("days")
        .innerText =
        days.toString().padStart(2, "0");


    document.getElementById("hours")
        .innerText =
        hours.toString().padStart(2, "0");


    document.getElementById("mins")
        .innerText =
        mins.toString().padStart(2, "0");


    document.getElementById("secs")
        .innerText =
        secs.toString().padStart(2, "0");
}


setInterval(updateCountdown, 1000);

updateCountdown();



/* ==========================================
   MUSIC TOGGLE
========================================== */

function toggleMusic() {

    const music =
        document.getElementById("bgMusic");

    const icon =
        document.getElementById("musicIcon");


    if (music.paused) {

        music.play();

        icon.classList.remove(
            "fa-music"
        );

        icon.classList.add(
            "fa-volume-high"
        );

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



/* ==========================================
   MAIN PHOTO SLIDER
========================================== */

let slideIndex = 0;

let sliderTimer;


function getSlides() {

    return document.querySelectorAll(
        ".slide"
    );
}


function showSlide(index) {

    const slides =
        getSlides();

    if (!slides.length) return;


    if (index >= slides.length) {
        slideIndex = 0;
    }

    if (index < 0) {
        slideIndex =
            slides.length - 1;
    }


    slides.forEach(
        slide =>
            slide.classList.remove(
                "active"
            )
    );


    slides[slideIndex]
        .classList.add("active");


    updateSliderDots();
}


function changeSlide(direction) {

    slideIndex += direction;

    showSlide(slideIndex);

    restartSlider();
}


function restartSlider() {

    clearInterval(sliderTimer);

    sliderTimer =
        setInterval(() => {

            slideIndex++;

            showSlide(slideIndex);

        }, 3500);
}


function createSliderDots() {

    const dotsContainer =
        document.getElementById(
            "sliderDots"
        );

    const slides =
        getSlides();

    if (!dotsContainer) return;


    dotsContainer.innerHTML = "";


    slides.forEach(
        (slide, index) => {

            const dot =
                document.createElement(
                    "span"
                );

            dot.className =
                "slider-dot";


            dot.onclick = () => {

                slideIndex = index;

                showSlide(slideIndex);

                restartSlider();

            };


            dotsContainer.appendChild(dot);

        }
    );


    updateSliderDots();
}


function updateSliderDots() {

    const dots =
        document.querySelectorAll(
            ".slider-dot"
        );

    dots.forEach(
        dot =>
            dot.classList.remove(
                "active-dot"
            )
    );


    if (dots[slideIndex]) {

        dots[slideIndex]
            .classList.add(
                "active-dot"
            );
    }
}



/* ==========================================
   PRE-WEDDING GALLERY
========================================== */

const galleryImages = [

    "photo1.jpeg",

    "photo2.jpeg",

    "photo3.jpeg",

    "photo4.jpeg",

    "photo5.jpeg"

];


let galleryIndex = 0;


function openPreWedding() {

    const modal =
        document.getElementById(
            "preWeddingModal"
        );


    modal.classList.add("active");

    galleryIndex = 0;

    updateGallery();

    document.body.style.overflow = "hidden";
}


function closePreWedding() {

    const modal =
        document.getElementById(
            "preWeddingModal"
        );


    modal.classList.remove("active");

    document.body.style.overflow = "";
}


function updateGallery() {

    const image =
        document.getElementById(
            "galleryMainImage"
        );

    const counter =
        document.getElementById(
            "galleryCounter"
        );

    const thumbnails =
        document.querySelectorAll(
            ".thumb"
        );


    image.style.opacity = "0";


    setTimeout(() => {

        image.src =
            galleryImages[
                galleryIndex
            ];

        image.style.opacity = "1";

    }, 120);


    counter.innerText =
        `${galleryIndex + 1} / ${galleryImages.length}`;


    thumbnails.forEach(
        thumb =>
            thumb.classList.remove(
                "active-thumb"
            )
    );


    if (thumbnails[galleryIndex]) {

        thumbnails[galleryIndex]
            .classList.add(
                "active-thumb"
            );
    }
}


function changeGallery(direction) {

    galleryIndex += direction;


    if (
        galleryIndex >=
        galleryImages.length
    ) {

        galleryIndex = 0;
    }


    if (galleryIndex < 0) {

        galleryIndex =
            galleryImages.length - 1;
    }


    updateGallery();
}


function selectGallery(index) {

    galleryIndex = index;

    updateGallery();
}



/* ==========================================
   CLOSE MODAL WHEN OUTSIDE CLICK
========================================== */

document.addEventListener(
    "click",
    function(event) {

        const modal =
            document.getElementById(
                "preWeddingModal"
            );


        if (
            modal &&
            event.target === modal
        ) {

            closePreWedding();
        }

    }
);



/* ==========================================
   ESC KEY CLOSE
========================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closePreWedding();

        }

    }
);



/* ==========================================
   SWIPE SUPPORT FOR PRE-WEDDING
========================================== */

let touchStartX = 0;

let touchEndX = 0;


const galleryViewer =
    document.querySelector(
        ".gallery-viewer"
    );


if (galleryViewer) {

    galleryViewer.addEventListener(
        "touchstart",
        function(event) {

            touchStartX =
                event.changedTouches[0]
                .screenX;

        },
        { passive: true }
    );


    galleryViewer.addEventListener(
        "touchend",
        function(event) {

            touchEndX =
                event.changedTouches[0]
                .screenX;


            handleSwipe();

        },
        { passive: true }
    );
}


function handleSwipe() {

    const difference =
        touchStartX - touchEndX;


    if (Math.abs(difference) < 40) {
        return;
    }


    if (difference > 0) {

        changeGallery(1);

    } else {

        changeGallery(-1);

    }
}



/* ==========================================
   WHATSAPP WISHES
========================================== */

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


    const whatsappMessage =

        `💐 Wedding Blessings 💐

Name: ${name}

WhatsApp No.: ${phone}

Wish:
${message}

Mansi ❤️ Dr. Nishu
26th November 2026`;


    const whatsappUrl =
        `https://wa.me/${targetNumber}?text=` +
        encodeURIComponent(
            whatsappMessage
        );


    window.open(
        whatsappUrl,
        "_blank"
    );
}



/* ==========================================
   PAGE LOAD
========================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        createSliderDots();

        showSlide(0);

        restartSlider();

        updateGallery();

    }
);
