const colorBox = document.getElementById('colorBox');
const hexBtn = document.getElementById('hexBtn');
const rgbBtn = document.getElementById('rgbBtn');
const randomBtn = document.getElementById('randomBtn');
const colorInput = document.getElementById('colorInput');
const submitBtn = document.getElementById('submitBtn');

let mode = "hex";

// Mode Selection
hexBtn.onclick = () => {
    mode = "hex";
    hexBtn.classList.add("active");
    rgbBtn.classList.remove("active");
    colorInput.value = "";
};

rgbBtn.onclick = () => {
    mode = 'rgb';
    rgbBtn.classList.add('active');
    hexBtn.classList.remove('active');
    colorInput.value = '';
};

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const rgb = `rgb(${r}, ${g}, ${b})`;

    if (mode === "hex") {
        return (
            "#" +
            r.toString(16).padStart(2, "0") +
            g.toString(16).padStart(2, "0") +
            b.toString(16).padStart(2, "0")
        )
    } else {
        return rgb
    }
}

randomBtn.onclick = () => {
    colorInput.value = getRandomColor();
};

submitBtn.onclick = () => {
    colorBox.style.backgroundColor = colorInput.value;
};