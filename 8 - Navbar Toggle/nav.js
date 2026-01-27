// Buttons
const closeBtn = document.getElementById('close');

// Nav Bar
const navBar = document.querySelector('.side-nav-bar');

closeBtn.addEventListener('click', () => {
    if (navBar.classList.contains('active')) {
        navBar.classList.remove('active');
    } else {
        navBar.classList.add('active');
    }
});

document.addEventListener('click', (e) => {
    if (!navBar.contains(e.target)) {
        navBar.classList.add('active');
    }
});