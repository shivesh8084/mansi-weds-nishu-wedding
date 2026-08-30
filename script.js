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


    if (!overlay) return;


    /* Welcome screen close */

    overlay.classList.add("opened");


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
            .catch(() => {

                console.log(
                    "Music requires user interaction."
                );

            });

    }

}


window.openInvitation =
    openInvitation;


/* ==========================================
   COUNTDOWN
========================================== */

/*
   Wedding:
   26 November 2026
   00:00:00
*/

const weddingDate =
    new Date(
        "November 26, 2026 00:00:00"
    ).getTime();


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


    /*
       Elements nahi mile
    */

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

        daysElement.innerText =
            "00";

        hoursElement.innerText =
            "00";

        minsElement.innerText =
            "00";

        secsElement.innerText =
            "00";


        if (weddingMessage) {

            weddingMessage.classList.add(
                "show"
            );

        }


        return;

    }


    /* ======================================
       BEFORE WEDDING
    ====================================== */

    if (weddingMessage) {

        weddingMessage.classList.remove(
            "show"
        );

    }


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


    daysElement.innerText =
        days
            .toString()
            .padStart(2, "0");


    hoursElement.innerText =
        hours
            .toString()
            .padStart(2, "0");


    minsElement.innerText =
        mins
            .toString()
            .padStart(2, "0");


    secsElement.innerText =
        secs
            .toString()
            .padStart(2, "0");

}


/* Every second */

setInterval(
    updateCountdown,
    1000
);


/* First update immediately */

updateCountdown();


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


    if (!music || !icon) return;


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
            .catch(() => {

                console.log(
                    "Music play error."
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


window.toggleMusic =
    toggleMusic;
