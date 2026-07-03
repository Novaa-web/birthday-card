let currentPage = 0;
const pages = document.querySelectorAll('.page');
const totalPages = pages.length;
let isPlaying = false;

function showPage(pageNum) {
    pages.forEach((page, index) => {
        page.classList.remove('active');
        document.querySelectorAll('.dot')[index].classList.remove('active');
    });

    pages[pageNum].classList.add('active');
    document.querySelectorAll('.dot')[pageNum].classList.add('active');
    currentPage = pageNum;
}

function nextPage() {
    if (currentPage < totalPages - 1) {
        showPage(currentPage + 1);
    }
}

function prevPage() {
    if (currentPage > 0) {
        showPage(currentPage - 1);
    }
}

function goToPage(pageNum) {
    showPage(pageNum);
}

function toggleMusic() {
    const audio = document.getElementById('bgMusic');
    const btn = document.getElementById('musicBtn');

    if (isPlaying) {
        audio.pause();
        btn.textContent = '🔊 Music On';
        btn.classList.remove('playing');
        isPlaying = false;
    } else {
        audio.play().catch(error => {
            console.log('Autoplay prevented:', error);
            btn.textContent = '🔉 Click to play';
        });
        btn.textContent = '🔉 Music On';
        btn.classList.add('playing');
        isPlaying = true;
    }
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextPage();
    if (e.key === 'ArrowLeft') prevPage();
});

// Initialize
showPage(0);

// Auto-play music on interaction
document.addEventListener('click', () => {
    if (!isPlaying) {
        const audio = document.getElementById('bgMusic');
        audio.play().catch(error => {
            console.log('Autoplay prevented:', error);
        });
        isPlaying = true;
        document.getElementById('musicBtn').classList.add('playing');
    }
}, { once: true });