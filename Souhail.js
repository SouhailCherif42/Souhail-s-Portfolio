
window.addEventListener("blur", () => {
  document.title = "Ou-est-tu passé ?";
})
window.addEventListener("focus", () => {
  document.title = "Souhail"
})

const portfoliodiv = document.getElementById('Portfolio');
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


function handleScroll() {
  const topOfportfolioDiv = portfoliodiv.getBoundingClientRect().top;

  if (topOfportfolioDiv < window.innerHeight) {
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

window.addEventListener('scroll', handleScroll);

const marqueediv = document.getElementById('marquee');
const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const sie = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const wportfolio = document.getElementById('wportfolio');

function handleScroll2() {
  const topofmarqueediv = marqueediv.getBoundingClientRect().top;

  if(topofmarqueediv< window.innerHeight){
    one.classList.add('slide-left1');
    five.classList.add('slide-left1');
    two.classList.add('slide-left2');
    sie.classList.add('slide-left2');
    three.classList.add('slide-right1');
    seven.classList.add('slide-right1');
    four.classList.add('slide-right2');
    eight.classList.add('slide-right2');
    wportfolio.classList.add('slide-out');
  }
}

window.addEventListener('scroll', handleScroll2);

const presentationDiv = document.getElementById('presentation');
const moi = document.getElementById('moi');
const r = document.getElementById('r');
const title2 = document.getElementById('title2');

function handleScroll3() {
  const topOfPresentationDiv = presentationDiv.getBoundingClientRect().top;

  if (topOfPresentationDiv < window.innerHeight) {
    title2.classList.add('slide-out-right');
  }
}

window.addEventListener('scroll', handleScroll3);

function handleScroll4() {
  const topofmoidiv = moi.getBoundingClientRect().top;

  if(topofmoidiv < window.innerHeight){
    moi.classList.add('slide-out');
  }
}

window.addEventListener('scroll', handleScroll4);

function handleScroll5() {
  const topofrdiv = r.getBoundingClientRect().top;

  if(topofrdiv < window.innerHeight){
    r.classList.add('slide-out');
  }
}

window.addEventListener('scroll', handleScroll5);

var translations = {
  "en": {
      "greeting": "Hello, welcome to my website!",
      "mm1":"Here's a small gallery of recent templates I made.",
      "wportfolio": "Welcome to my portfolio! I am excited to share with you some of the templates that I have created to showcase my skills and abilities as a designer. These templates were created with the purpose of training and honing my skills in various design techniques and technologies. Each template represents a unique challenge and a different set of skills that I have had to master. You will find templates that range from simple, clean designs to more complex, interactive layouts. I have also included a variety of different design styles, such as minimalistic, modern, and creative. I hope that you enjoy exploring these templates and that they give you a sense of my abilities as a designer.  Thank you for visiting my portfolio!",
      "moi":"My name is CHERIF Souhail and I'm 20 years old. I'm currently in my second year of Bachelor of Science in Engineering at ISTP/ Mines Saint-Etienne. I'm seeking an internship of at least 2 months starting in May in web development.</br> I'm passionate about web development. I'm motivated and ambitious, and I like working in a team. I have acquired strong technical skills and an excellent sense of service. I'm confident that these qualities will enable me to integrate quickly and contribute actively to the company that will welcome me.</br> I believe that this internship will be an opportunity for me to put my knowledge into practice and to gain professional experience. I'm therefore very interested in this opportunity and am available for an interview.",
      "mm3":"Please do not hesitate to contact me if you have any questions or comments. I will be happy to assist you.",
      "a2":"About",
      "a3":"Portfolio",
      "a4":"Skills",
      "a5":"Home",
      "music":"Sound <i>OFF</i>",
      "left1":"<h3>Hello !<br>I'm Souhail.</h3><div class='wrapper'><div class='static-txt' id='static-txt'>I'm a</div><ul class='dynamic-txts'><li><span>Student.</span></li><li><span>Engineer.</span></li><li><span>Developer.</span></li><li><span>Beautiful man.</span></li></ul></div><h4 id='mm' class='mm'>I'm currently in my second year of a Bachelor of Science in Engineering at ISTP/ Mines Saint-Etienne. I'm seeking an internship of at least 2 months starting in May in web development.</h4><div class='boutton'><a href='Autres/CVCHERIFSouhail.pdf' id='CV' class='CV' target='_blank'><span class='material-symbols-outlined'>visibility</span>My Resume</a><a id='Call' class='Call' target='_blank' href='https://calendly.com/cherifsouhail/call?month=2023-01'><span class='material-symbols-outlined'>call</span>Book a call</a></div>",
      "mm5":"Contact me",
      "title2":"About me",
      "r":"Let's make something special together !"
  },
  "fr": {
      "greeting": "Bonjour, bienvenue sur mon site internet!",
      "mm1":"Voici une petite galerie de modèles récents que j'ai réalisés.",
      "wportfolio": "Bienvenue dans mon portfolio ! Je suis heureux de partager avec vous certains des modèles que j'ai créés pour mettre en valeur mes compétences et mes capacités en tant que designer. Ces modèles ont été créés dans le but de m'entraîner et d'affiner mes compétences dans diverses techniques et technologies de conception. Chaque modèle représente un défi unique et un ensemble différent de compétences que j'ai dû maîtriser. Vous trouverez des modèles allant de conceptions simples et épurées à des mises en page interactives plus complexes. J'ai également inclus une variété de styles de conception différents, tels que minimaliste, moderne et créatif. J'espère que vous prendrez plaisir à explorer ces modèles et qu'ils vous donneront une idée de mes capacités en tant que designer. Merci de visiter mon portfolio !",
      "moi":"Je m'appelle CHERIF Souhail et j'ai 20 ans. Je suis actuellement en deuxième année de licence en ingénierie à l'ISTP/ Mines Saint-Etienne. Je suis à la recherche d'un stage d'au moins 2 mois à partir du mois de mai dans le domaine du développement web.</br> Je suis passionné par le développement web. Je suis motivé et ambitieux, et j'aime travailler en équipe. J'ai acquis de solides compétences techniques et un excellent sens du service. Je suis convaincu que ces qualités me permettront de m'intégrer rapidement et de contribuer activement à l'entreprise qui m'accueillera.</br> Je pense que ce stage sera l'occasion pour moi de mettre en pratique mes connaissances et d'acquérir une expérience professionnelle. Je suis donc très intéressé par cette opportunité et je suis disponible pour un entretien.",
      "mm3":"N'hésitez pas à me contacter si vous avez des questions ou des commentaires. Je me ferai un plaisir de vous aider.",
      "a2":"Moi",
      "a3":"Portfolio",
      "a4":"Compétences",
      "a5":"Accueil",
      "music":"Son <i>OFF</i>",
      "left1":"<h3>Salut !<br>Je suis Souhail.</h3><div class='wrapper'><div class='static-txt' id='static-txt'>Je suis</div><ul class='dynamic-txts'><li><span>Étudiant.</span></li><li><span>Ingénieur.</span></li><li><span>Developer.</span></li><li><span>Très beau.</span></li></ul></div><h4 id='mm' class='mm'>Je suis actuellement en deuxième année de licence d'ingénieur à l'ISTP/ Mines Saint-Etienne. Je suis à la recherche d'un stage d'au moins 2 mois à partir du mois de mai dans le domaine du développement web.</h4><div class='boutton'><a href='Autres/CVCHERIFSouhail.pdf' id='CV' class='CV' target='_blank'><span class='material-symbols-outlined'>visibility</span>Mon CV</a><a id='Call' class='Call' target='_blank' href='https://calendly.com/cherifsouhail/call?month=2023-01'><span class='material-symbols-outlined'>call</span>Réservez un appel</a></div>",
      "mm5":"Contactez moi",
      "title2":"A propos de moi",
      "r":"Faisons quelque chose de spécial !"
  }
};

/*document.getElementById("left1").innerHTML = translations[currentLang]["left1"];*/

// variable to hold current language
var currentLang = "fr";

// function to update text with translations
function updateText() {
  document.getElementById("mm").innerHTML = translations[currentLang]["mm"];
  document.getElementById("mm1").innerHTML = translations[currentLang]["mm1"];
  document.getElementById("wportfolio").innerHTML = translations[currentLang]["wportfolio"];
  document.getElementById("mm3").innerHTML = translations[currentLang]["mm3"];
  document.getElementById("moi").innerHTML = translations[currentLang]["moi"];
  document.getElementById("Call").innerHTML = translations[currentLang]["Call"];
  document.getElementById("a2").innerHTML = translations[currentLang]["a2"];
  document.getElementById("a3").innerHTML = translations[currentLang]["a3"];
  document.getElementById("a4").innerHTML = translations[currentLang]["a4"];
  document.getElementById("a5").innerHTML = translations[currentLang]["a5"];
  document.getElementById("music").innerHTML = translations[currentLang]["music"];
  document.getElementById("left1").innerHTML = translations[currentLang]["left1"];
  document.getElementById("mm5").innerHTML = translations[currentLang]["mm5"];
  document.getElementById("title2").innerHTML = translations[currentLang]["title2"];
  document.getElementById("r").innerHTML = translations[currentLang]["r"];
}

// function to toggle language
function toggleLang() {
  if (currentLang === "en") {
      currentLang = "fr";
  } else {
      currentLang = "en";
  }
  updateText();
}

// add event listener to language toggle button
document.getElementById("language").addEventListener("click", toggleLang);

// call updateText function to set initial text
updateText();



