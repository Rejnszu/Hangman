"use strict";
const zbior = [
  "pies",
  "kot",
  "miska",
  "koc",
  "reflektor",
  "wiatrak",
  "baca",
  "podloga",
  "butelka",
  "mama",
  "siostra",
  "telewizor",
  "sarna",
  "dinozaur",
  "ogrzewać",
  "kasztan",
  "pomidor",
  "trampki",
  "kubek",
  "encyklopedia",
  "miska",
  "dama",
  "kalkulator",
  "wazon",
  "zamek",
  "tygrys",
  "demon",
];

let wynik = document.querySelector("#wynik");
let liczbaliter = document.querySelector("#liczbaliter");
let liczbaliter1 = document.querySelector("#liczbaliter1");
let komunikat = document.querySelector("#komunikat");
const slowogora = document.querySelector("#slowo");
const kontener = document.querySelector("#kontener");
const lewareka = document.querySelector(".cz1");
const prawareka = document.querySelector(".cz2");
const lewanoga = document.querySelector(".cz3");
const prawanoga = document.querySelector(".cz4");
const brzuch = document.querySelector(".cz5");
const szyja = document.querySelector(".cz6");
const glowa = document.querySelector(".cz7");
const gornaDeska = document.querySelector(".cz9");
const srodkowaDeska = document.querySelector(".cz8");
const dolnaDeska = document.querySelector(".cz10");

komunikat.textContent = "Witaj w grze!";
let pusty = new Set();
let pusty1 = new Set();

let hangman = [
  lewareka,
  prawareka,
  lewanoga,
  prawanoga,
  brzuch,
  szyja,
  glowa,
  gornaDeska,
  srodkowaDeska,
  dolnaDeska,
].reverse();
for (let i = 0; i < hangman.length; i++) {
  hangman[i].classList.add("hidden");
}
let slowo = zbior[Math.floor(Math.random() * zbior.length)];
console.log(slowo);
let remainingLetters = slowo.length;
let guessed = [];
for (let j = 0; j < slowo.length; j++) {
  guessed[j] = "_";
}

document.querySelector("#slowo").textContent = guessed.join(" ");
let score = 10;
let i = -1;
// let dolne = [...slowo];

liczbaliter.textContent = slowo.length;
liczbaliter1.textContent = remainingLetters;
document.querySelector("#btn").addEventListener("click", function () {
  let niepopr = [];
  let litera = document.querySelector("#inpt").value;
  document.querySelector("input").value = "";
  console.log(litera);
  let letters = [];
  letters.push(litera);
  inpt.value = "";
  if (score > 0) {
    if (slowo.includes(litera)) {
      let k;
      for (k = 0; k < slowo.length; k++) {
        if (slowo[k] === litera) {
          guessed[k] = litera;
          remainingLetters--;
          liczbaliter1.textContent = remainingLetters;
        }
      }

      document.querySelector("#slowo").textContent = guessed.join(" ");
      pusty.add(litera);
      const popr = [...pusty];
      console.log(pusty);
      document.querySelector("#poprawne").textContent = popr;
      komunikat.textContent = "Tym razem ci się udało!";
      if (remainingLetters == 0) {
        document.querySelector("#btn").disabled = true;
        komunikat.textContent = "Wygrałeś!";
        document.querySelector("body").style.backgroundColor = "green";
      }
    } else if (!slowo.includes(litera)) {
      pusty1.add(litera);
      niepopr = [...pusty1];
      console.log(niepopr);
      document.querySelector("#niepoprawne").textContent = niepopr;

      komunikat.textContent = "Niestety, jesteś coraz bliżej końca gry!";
      score -= 1;
      i = i + 1;
      wynik.textContent = score;

      hangman[i].classList.remove("hidden");
    }
  }
  if (score === 0) {
    komunikat.textContent = "Niestety, Przegrałeś!";
    document.querySelector("body").style.backgroundColor = "red";
  }
});

if (guessed == slowo) {
  komunikat.textContent = "Wygrałeś!";
}
document.querySelector("#again").addEventListener("click", function () {
  score = 10;
  wynik.textContent = score;
  slowo = zbior[Math.floor(Math.random() * zbior.length)];
  document.querySelector("body").style.backgroundColor = "white";
  console.log(slowo);

  pusty.clear();
  pusty1.clear();

  document.querySelector("#poprawne").textContent = "________";
  document.querySelector("#niepoprawne").textContent = "________";
  i = -1;
  for (let i = 0; i < hangman.length; i++) {
    hangman[i].classList.add("hidden");
  }
  liczbaliter.textContent = slowo.length;

  guessed = [];
  for (let j = 0; j < slowo.length; j++) {
    guessed[j] = "_";
  }
  document.querySelector("#slowo").textContent = guessed.join(" ");
  document.querySelector("input").value = "";
  document.querySelector("#btn").disabled = false;
  remainingLetters = slowo.length;
  komunikat.textContent = "Witaj w grze!";
  liczbaliter1.textContent = remainingLetters;
});
