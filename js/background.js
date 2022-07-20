const figure = document.querySelector("figure")

const color1 = [
    "#8EC5FC",
    "#E0C3FC",
    "#0093E9",
    "#80D0C7",
    "#FBAB7E",
    "#F7CE68",
]

const color2 = [
    "#FFDEE9",
    "#52ACFF",
    "#FFE32C",
    "#FF5ACD",
    "#16A085",
    "#F76B1C",
]

const chosenBg1 = color1[Math.floor(Math.random() * color1.length)];
const chosenBg2 = color2[Math.floor(Math.random() * color2.length)];

figure.style.background = `linear-gradient(90deg,${chosenBg1}, ${chosenBg2})`;