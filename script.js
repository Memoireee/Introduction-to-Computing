const audio = document.getElementById('audio');
const playButton = document.getElementById('play-button');
const volumeSlider = document.getElementById('volume-slider');

// Audio play/pause functionality
playButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playButton.textContent = 'Pause';
    } else {
        audio.pause();
        playButton.textContent = 'Play';
    }
});

// Volume control functionality
volumeSlider.addEventListener('input', (event) => {
    const volume = event.target.value / 100;
    audio.volume = volume;
});

// Image Popup functionality
document.getElementById('imagePopupButton').addEventListener('click', () => {
    document.getElementById('imagePopup').style.display = 'block';
});

document.getElementById('closeImageButton').addEventListener('click', () => {
    document.getElementById('imagePopup').style.display = 'none';
});

// Video Popup functionality
document.getElementById('videoPopupButton').addEventListener('click', () => {
    document.getElementById('videoPopup').style.display = 'block';
});

document.getElementById('closeVideoButton').addEventListener('click', () => {
    document.getElementById('videoPopup').style.display = 'none';
});

// Close popups when clicking outside of them
window.addEventListener('click', (event) => {
    const imagePopup = document.getElementById('imagePopup');
    const videoPopup = document.getElementById('videoPopup');
    
    if (event.target === imagePopup) {
        imagePopup.style.display = 'none';
    }
    if (event.target === videoPopup) {
        videoPopup.style.display = 'none';
    }
});