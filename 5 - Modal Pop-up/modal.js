// Getting the ID
const cancelBtn = document.getElementById('cancelBtn');
const subBtn = document.getElementById('subBtn');
const modalPopup = document.getElementById('modalPopup');

// Button Click Function
subBtn.onclick = () => {
    modalPopup.style.display = "block";
};

cancelBtn.onclick = () => {
    modalPopup.style.display = "none";
};

window.onclick = (event) => {
    if (event.target == modalPopup) {
        modalPopup.style.display = "none";
    }
};