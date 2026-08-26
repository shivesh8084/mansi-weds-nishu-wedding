// 1. Audio Toggle
let isPlaying = false;
const bgMusic = document.getElementById('bgMusic');
const musicIcon = document.getElementById('musicIcon');

function toggleMusic() {
    if (isPlaying) {
        bgMusic.pause();
        musicIcon.className = "fa-solid fa-music";
    } else {
        bgMusic.play();
        musicIcon.className = "fa-solid fa-compact-disc fa-spin";
    }
    isPlaying = !isPlaying;
}

// 2. Photo Slider Auto-play
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}
setInterval(nextSlide, 3000);

// 3. Countdown Timer set to 26 November 2026
const weddingDate = new Date('Nov 26, 2026 00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const gap = weddingDate - now;

    if (gap > 0) {
        const days = Math.floor(gap / (1000 * 60 * 60 * 24));
        const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((gap % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = String(days).padStart(2, '0');
        document.getElementById('hours').innerText = String(hours).padStart(2, '0');
        document.getElementById('mins').innerText = String(mins).padStart(2, '0');
        document.getElementById('secs').innerText = String(secs).padStart(2, '0');
    } else {
        document.getElementById('days').innerText = "00";
        document.getElementById('hours').innerText = "00";
        document.getElementById('mins').innerText = "00";
        document.getElementById('secs').innerText = "00";
    }
}
setInterval(updateCountdown, 1000);
updateCountdown();

// 4. WhatsApp Wish Sender Function
function sendToWhatsApp(event) {
    event.preventDefault();
    const name = document.getElementById('wishName').value;
    const phone = document.getElementById('wishPhone').value;
    const message = document.getElementById('wishMessage').value;
    
    const whatsappNumber = "918084296708"; // Aapka WhatsApp number
    const text = `*Wedding Blessing/Wish*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Message:* ${message}`;
    
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(whatsappURL, '_blank');
}