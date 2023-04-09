function Soru(soruMetni, cevaplar, dogruCevap) {
  this.soruMetni = soruMetni;
  this.cevaplar = cevaplar;
  this.dogruCevap = dogruCevap;
}

let sorular = [
  new Soru(
    "hangisi takım sporurudur?",
    { a: "voleybol", b: "tenis", c: "yüzme" },
    "a"
  ),
  new Soru(
    "hangisi bireysel sporurudur?",
    { a: "voleybol", b: "futbol", c: "yüzme" },
    "c"
  ),
  new Soru(
    "hangisi Türk sporurudur?",
    { a: "golf", b: "güreş", c: "rugby" },
    "b"
  ),
  new Soru(
    "hangisi Alman sporurudur?",
    { a: "futbol", b: "tenis", c: "yüzme" },
    "a"
  ),
];

function Quiz(sorular) {
  this.sorular = sorular;
  this.soruIndex = 0;
}

Quiz.prototype.soruGetir = function () {
  return this.sorular[this.soruIndex];
};

const quiz = new Quiz(sorular);

document.querySelector(".btn-start").addEventListener("click", function () {
  if (quiz.sorular.length != quiz.soruIndex) {
    document.querySelector(".quiz_box").classList.add("active")
    console.log(quiz.soruGetir());
    quiz.soruIndex++
  } else {
    console.log("quiz bitti.");
  }
});