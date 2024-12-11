const ecran = document.getElementById("ecran");
const un = document.getElementById("un");
const deux = document.getElementById("deux");
const trois = document.getElementById("trois");
const quatre = document.getElementById("quatre");
const cinq = document.getElementById("cinq");
const six = document.getElementById("six");
const sept = document.getElementById("sept");
const huit = document.getElementById("huit");
const neuf = document.getElementById("neuf");
const zero = document.getElementById("zero");
const virgule = document.getElementById("virgule");
const egal = document.getElementById("egal");
const clear = document.getElementById("clear");
const plus = document.getElementById("plus");
const moins = document.getElementById("moins");
const multip = document.getElementById("multip");
const divis = document.getElementById("divis");

const buttons = document.querySelectorAll(".pave button");
const bouton = document.getElementsByClassName("bouton");
var nombre1, nombre2, operateur, resultat;

const calcul = () => {
  switch (operateur) {
    case "+": {
      resultat = nombre1 + nombre2;
      return resultat;
    }
    case "-": {
      resultat = nombre1 - nombre2;
      return resultat;
    }
    case "*": {
      resultat = nombre1 * nombre2;
      return resultat;
    }
    case "/": {
      resultat = nombre1 / nombre2;
      return resultat;
    }
  }
};

clear.addEventListener("click", () => {
  ecran.textContent = "";
});

plus.addEventListener("click", () => {
  nombre1 = parseFloat(ecran.textContent);
  operateur = "+";
  ecran.textContent = "";
  console.log(nombre1, operateur);
});
moins.addEventListener("click", () => {
  nombre1 = parseFloat(ecran.textContent);
  operateur = "-";
  ecran.textContent = "";

  console.log(nombre1, operateur);
});

multip.addEventListener("click", () => {
  nombre1 = parseFloat(ecran.textContent);
  operateur = "*";
  ecran.textContent = "";

  console.log(nombre1, operateur);
});

divis.addEventListener("click", () => {
  nombre1 = parseFloat(ecran.textContent);
  operateur = "/";
  ecran.textContent = "";

  console.log(nombre1, operateur);
});

egal.addEventListener("click", () => {
  nombre2 = parseFloat(ecran.textContent);
  calcul(nombre1, operateur, nombre2);
  ecran.textContent =
    nombre1 + " " + operateur + " " + nombre2 + " = " + resultat;
});

for (a = 0; a <= buttons.length - 7; a++) {
  buttons[a].addEventListener("click", (e) => {
    if(ecran.innerText.includes ("=")){
        ecran.textContent=""
        nombre1=null
        nombre2=null
        operateur=null
    }
    ecran.innerText += e.target.textContent;
  });
}

// for (a=0;a<=20;a++){
//     pave.addEventListener('click',(e)=>{

//         console.log(pave.innerText)
//     })
//     }
