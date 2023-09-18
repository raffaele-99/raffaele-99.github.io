const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');

function toggleMenu() {
    if (nav.style.transform === 'translateX(100%)') {
        nav.style.transform = 'translateX(0)';
        overlay.style.display = 'block';  // Show the overlay when the menu is open
    } else {
        nav.style.transform = 'translateX(100%)';
        overlay.style.display = 'none';  // Hide the overlay when the menu is closed
    }
}

menuBtn.addEventListener('click', (event) => {
    toggleMenu();
    event.stopPropagation();  // Prevents the event from reaching the document click listener
});

overlay.addEventListener('click', () => {
    nav.style.transform = 'translateX(100%)';
    overlay.style.display = 'none';  // Hide the overlay when the menu is closed
});

document.addEventListener('click', (event) => {
    if (!nav.contains(event.target) && !menuBtn.contains(event.target) && nav.style.transform !== 'translateX(100%)') {
        nav.style.transform = 'translateX(100%)';
        overlay.style.display = 'none';  // Hide the overlay when the menu is closed
    }
});
