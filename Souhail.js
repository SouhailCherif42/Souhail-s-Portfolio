
window.addEventListener("blur", () => {
  document.title = "Ou-est-tu passé ?";
})
window.addEventListener("focus", () => {
  document.title = " Souhail"
})

const portfoliodiv = document.getElementById('Portfolio');
const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const sie = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const a = document.getElementById('a');
const b = document.getElementById('b');
const c = document.getElementById('c');
const d = document.getElementById('d');
const e = document.getElementById('e');
const f = document.getElementById('f');
const g = document.getElementById('g');
const h = document.getElementById('h');
const i = document.getElementById('i');
const j = document.getElementById('j');
const k = document.getElementById('k');
const l = document.getElementById('l');


function handleScroll2() {
  const topOfportfolioDiv = portfoliodiv.getBoundingClientRect().top;

  if (topOfportfolioDiv < window.innerHeight) {
    one.classList.add('slide-left1');
    five.classList.add('slide-left1');
    two.classList.add('slide-left2');
    sie.classList.add('slide-left2');
    three.classList.add('slide-right1');
    seven.classList.add('slide-right1');
    four.classList.add('slide-right2');
    eight.classList.add('slide-right2');
    a.classList.add('a');
    b.classList.add('b');
    c.classList.add('c');
    d.classList.add('d');
    e.classList.add('e');
    f.classList.add('f');
    g.classList.add('g');
    h.classList.add('h');
    i.classList.add('i');
    j.classList.add('j');
    k.classList.add('k');
    l.classList.add('l');
  }
}

window.addEventListener('scroll', handleScroll2);

const presentationDiv = document.getElementById('presentation');
const moi = document.getElementById('moi');
const r = document.getElementById('r');
const title2 = document.getElementById('title2');

function handleScroll() {
  const topOfPresentationDiv = presentationDiv.getBoundingClientRect().top;

  if (topOfPresentationDiv < window.innerHeight) {
    title2.classList.add('slide-out-left');
    moi.classList.add('slide-out-left');
    r.classList.add('slide-out-right');

  }
}

window.addEventListener('scroll', handleScroll);

window.onbeforeunload = function() {
  window.scrollTo(0, 0);
};

document.addEventListener('click', function() {
  window.scrollTo(0, 0);
});

