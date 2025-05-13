//Animasi teks class kotak-teks
const teks = "guess whattt dayy it iss todayy?? yapp harii inii ayangg akuu ulangg tahunnn yangg kee 17, happyy birthdayy sayanggg💐🥳🥳.  ndaaa kerasaa yaaaa, sekaranggg nanaa usianyaa udahh 17 tahunn ajaaa udahh makinn dewasaa.";
const container = document.querySelector(".typewriter");
let i = 0;

function typeText() {
    if (i < teks.length) {
        container.innerHTML += teks.charAt(i);
        i++;
        setTimeout(typeText, 60);
        //kecepatan mengetik (100ms per karakter)
    }
}
typeText(); 