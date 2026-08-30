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


    /* Overlay close */

    if (overlay) {

        overlay.classList.add("opened");

    }


    /* Music start */

    if (music) {

        music.play()
            .then(() => {

                if (icon) {

                    icon.classList.remove(
                        "fa-music"
                    );

                    icon.classList.add(
                        "fa-volume-high"
                    );

                }

            })
            .catch((error) => {

                console.log(
                    "Music could not start:",
                    error
                );

            });

    }

}


/* HTML onclick ke liye */

window.openInvitation =
    openInvitation;


/* ==========================================
   COUNTDOWN DATE
========================================== */

/*
   Wedding Date:
   26 November 2026
*/

const weddingDate =
    new Date(
        "2026-11-26T00:00:00"
    ).getTime();


/* ==========================================
   UPDATE COUNTDOWN
========================================== */

function updateCountdown() {

    const now =
        new Date().getTime();


    const distance =
        weddingDate - now;


    const daysElement =
        document.getElementById("days");

    const hoursElement =
        document.getElementById("hours");

    const minsElement =
        document.getElementById("mins");

    const secsElement =
        document.getElementById("secs");

    const weddingMessage =
        document.getElementById(
            "weddingDayMessage"
        );


    /* Elements nahi mile to function stop */

    if (
        !daysElement ||
        !hoursElement ||
        !minsElement ||
        !secsElement
    ) {

        return;

    }


    /* ======================================
       WEDDING DAY ARRIVED
    ====================================== */

    if (distance <= 0) {

        daysElement.textContent =
            "00";

        hoursElement.textContent =
            "00";

        minsElement.textContent =
            "00";

        secsElement.textContent =
            "00";


        if (weddingMessage) {

            weddingMessage.classList.add(
                "show"
            );

        }


        return;

    }


    /* Wedding day message hide */

    if (weddingMessage) {

        weddingMessage.classList.remove(
            "show"
        );

    }


    /* ======================================
       CALCULATIONS
    ====================================== */

    const days =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (
                distance %
                (1000 * 60 * 60 * 24)
            ) /
            (1000 * 60 * 60)
        );


    const mins =
        Math.floor(
            (
                distance %
                (1000 * 60 * 60)
            ) /
            (1000 * 60)
        );


    const secs =
        Math.floor(
            (
                distance %
                (1000 * 60)
            ) /
            1000
        );


    /* ======================================
       DISPLAY COUNTDOWN
    ====================================== */

    daysElement.textContent =
        String(days).padStart(2, "0");


    hoursElement.textContent =
        String(hours).padStart(2, "0");


    minsElement.textContent =
        String(mins).padStart(2, "0");


    secsElement.textContent =
        String(secs).padStart(2, "0");

}


/* First update immediately */

updateCountdown();


/* Update every second */

setInterval(
    updateCountdown,
    1000
);


/* ==========================================
   MUSIC TOGGLE
========================================== */

function toggleMusic(event) {

    if (event) {

        event.stopPropagation();

    }


    const music =
        document.getElementById("bgMusic");

    const icon =
        document.getElementById("musicIcon");


    if (!music || !icon) {

        return;

    }


    /* Music paused hai */

    if (music.paused) {

        music.play()
            .then(() => {

                icon.classList.remove(
                    "fa-music"
                );

                icon.classList.add(
                    "fa-volume-high"
                );

            })
            .catch((error) => {

                console.log(
                    "Music play error:",
                    error
                );

            });

    }


    /* Music chal raha hai */

    else {

        music.pause();


        icon.classList.remove(
            "fa-volume-high"
        );

        icon.classList.add(
            "fa-music"
        );

    }

}


/* HTML onclick ke liye */

window.toggleMusic =
    toggleMusic;
