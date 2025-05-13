// Animasi mengetik class judul
const teks = "Happy Birthday";
const container = document.querySelector(".judul");
let i = 0;

function typeText() {
    if (i < teks.length) {
        container.innerHTML += teks.charAt(i);
        i++;
        setTimeout(typeText, 200);
        //kecepatan mengetik (100ms per karakter)
    }
}
typeText();
