function Soru(soruMetni, cevaplar, dogruCevap) {
  this.soruMetni = soruMetni;
  this.cevaplar = cevaplar;
  this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function (cevap) {
  return cevap == this.dogruCevap;
};

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
  document.querySelector(".quiz_box").classList.add("active");
  soruGoster(quiz.soruGetir());
  document.querySelector(".next_btn").classList.remove("show")
  
});

document.querySelector(".next_btn").addEventListener("click", function () {
  if (quiz.sorular.length != quiz.soruIndex) {
    soruGoster(quiz.soruGetir());
    document.querySelector(".next_btn").classList.remove("show")
    quiz.soruIndex += 1;
  } else {
    console.log("quiz bitti.");
  }
});

const option_list = document.querySelector(".option_list");
const correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>';
const incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>';

function soruGoster(quiz_sorugetir) {
  let question = `<span>${quiz_sorugetir.soruMetni}</span>`;
  let options = "";

  for (let cevap in quiz_sorugetir.cevaplar) {
    options += `
        <div class="option">
        <span><b>${cevap}</b>${quiz_sorugetir.cevaplar[cevap]}</span>
        </div>
        `;
  }

  document.querySelector(".question_text").innerHTML = question;
  option_list.innerHTML = options;
  const option = option_list.querySelectorAll(".option");

  for (let opt of option) {
    opt.setAttribute("onclick", "optionSelected(this)");
  }
}

function optionSelected(option) {
  let cevap = option.querySelector("span b").textContent;
  let soru = quiz.soruGetir();

  if (soru.cevabiKontrolEt(cevap)) {
    option.classList.add("correct");
    option.insertAdjacentHTML("beforeend", correctIcon);
  } else {
    option.classList.add("incorrect");
    option.insertAdjacentHTML("beforeend", incorrectIcon);
  }

  for (let i = 0; i < option_list.children.length; i++) {
    option_list.children[i].classList.add("disabled");
  }

  document.querySelector(".next_btn").classList.add("show")
  
}
