//Animasi teks class kotak-teks
const teks = "maafff yaaaa nanaaa, kalauu fotoo-fotoonya dii akuuu ndaaa banyakkk dann cumaa seadanyaa ajaa. tapiii setiapp momenn bersamamuu selaluu tersimpann di dalamm hatii akuu, ahayyy. bersamamu adalahh kenangann yangg palinggg indahhh.";
const container = document.querySelector(".kotak-teks");
let i = 0;

function typeText() {
    if (i < teks.length) {
        container.innerHTML += teks.charAt(i);
        i++;
        setTimeout(typeText, 80);
        //kecepatan mengetik (100ms per karakter)
    }
}
typeText(); 