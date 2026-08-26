// --- OPEN INVITATION & PLAY MUSIC ---
function openInvitation() {
    const overlay = document.getElementById("welcomeOverlay");
    const music = document.getElementById("bgMusic");
    const icon = document.getElementById("musicIcon");

    // Play music on tap
    music.play().then(() => {
        icon.classList.remove("fa-music");
        icon.classList.add("fa-volume-high");
    }).catch(error => {
        console.log("Audio play error:", error);
    });

    // Hide welcome screen smoothly
    overlay.style.opacity = "0";
    setTimeout(() => {
        overlay.style.display = "none";
    }, 600);
}


// --- COUNTDOWN TIMER ---
const weddingDate = new Date("Nov 26, 2026 00:00:00").getTime();

const countdownTimer = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
    document.getElementById("mins").innerHTML = mins < 10 ? "0" + mins : mins;
    document.getElementById("secs").innerHTML = secs < 10 ? "0" + secs : secs;

    if (distance < 0) {
        clearInterval(countdownTimer);
        document.querySelector(".countdown-grid").innerHTML = "<h3 style='color: #ffd700;'>The Wedding Day Has Arrived!</h3>";
    }
}, 1000);


// --- BACKGROUND MUSIC TOGGLE BUTTON ---
function toggleMusic() {
    const music = document.getElementById("bgMusic");
    const icon = document.getElementById("musicIcon");
    
    if (music.paused) {
        music.play();
        icon.classList.remove("fa-music");
        icon.classList.add("fa-volume-high");
    } else {
        music.pause();
        icon.classList.remove("fa-volume-high");
        icon.classList.add("fa-music");
    }
}


// --- PHOTO SLIDER ---
let slideIndex = 0;
function showSlides() {
    const slides = document.querySelectorAll(".slide");
    if (slides.length === 0) return;
    
    slides.forEach(slide => slide.classList.remove("active"));
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    
    slides[slideIndex - 1].classList.add("active");
    setTimeout(showSlides, 3000); 
}

document.addEventListener("DOMContentLoaded", () => {
    if(document.querySelectorAll(".slide").length > 0) {
        showSlides();
    }
});


// --- WHATSAPP WISHES ---
function sendToWhatsApp(event) {
    event.preventDefault();
    const name = document.getElementById("wishName").value;
    const phone = document.getElementById("wishPhone").value;
    const message = document.getElementById("wishMessage").value;

    const targetNumber = "918084296708"; 

    const whatsappUrl = `https://wa.me/${targetNumber}?text=Name:%20${encodeURIComponent(name)}%0APhone:%20${encodeURIComponent(phone)}%0AWish:%20${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
}