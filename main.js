// Display menu event
const btnMenu = document.querySelector(".Menu i");
const menu = document.querySelector(".choseeTheme");
btnMenu.addEventListener("click", () => menu.classList.toggle("active"));
btnMenu.addEventListener("click", () => btnMenu.classList.toggle("fa-xmark"))
// Display menu event
// ------------------------------

// Change Theme
const allThemes = document.querySelectorAll(".choseeTheme .theme");
const body = document.querySelector("body");
body.classList.add("ligth-theme");

allThemes.forEach((items) => {
  items.addEventListener("click", () => {
    
    menu.classList.toggle("active");
    btnMenu.classList.toggle("fa-xmark");
    let getTheme = items.firstChild.textContent;

    if (getTheme === "Ligth") {
      body.classList.remove("dark-theme");
      body.classList.remove("pikachu-theme");
      body.classList.remove("chicle-theme");
      body.classList.add("ligth-theme");

    } else if (getTheme === "Dark") {
      body.classList.remove("ligth-theme");
      body.classList.remove("pikachu-theme");
      body.classList.remove("chicle-theme");
      body.classList.add("dark-theme");

    } else if (getTheme === "Pikachu") {
      body.classList.remove("ligth-theme");
      body.classList.remove("dark-theme");
      body.classList.remove("chicle-theme");
      body.classList.add("pikachu-theme");

    } else if (getTheme === "Chicle") {
      body.classList.remove("ligth-theme");
      body.classList.remove("dark-theme");
      body.classList.remove("pikachu-theme");
      body.classList.add("chicle-theme");

    } 

  });

});
// Change Theme
// -------------------------------

// Calculator
const showNumbers = document.querySelector(".showNumbersBox span");
const showFormate = document.querySelector(".showNumbersBox h4");
const allBtn = document.querySelectorAll(".bodyCalculator button");
const removeNumber = document.querySelector(".borrarbox .fa-delete-left");
showNumbers.textContent = "-";

let carculatorData = [];
let acumulatorNumber;
let endValue;
let position = -1;


const getDataBtn = (btn) => {

  const valueBtn = btn.value;
  
  if (valueBtn === "clear") {
    // Linpiar la carculadora
    carculatorData = [];
    showNumbers.textContent = "-";

  } else if (valueBtn === "=") {
    carculatorData = [];
    endValue = eval(acumulatorNumber);
    // Limitar la lingitud de numeros obtenidos
    endValue = Number(endValue).toFixed(endValue.toString().length / 3);
    showNumbers.textContent = endValue;
    showFormate.textContent = acumulatorNumber + " ="

    // Agregar el valor obtenido para poder manipularlo;
    carculatorData.push(endValue);

    position = -1;

  } else if (valueBtn === "<") {
    // carculatorData.pop();
    carculatorData = [];

    // Borrador
    // Desplatace atraves de la ultima egecucion obtenida y muestralo por pantalla.
    let numRenuve = eval(endValue).toString().split("").slice(0, position).join("");
    showNumbers.textContent = numRenuve;

    carculatorData.push(numRenuve);

    if (Number(numRenuve) === 0) { showNumbers.textContent = "-" };

    position--;

  } else {
    // Tomar los valores, formatearlos, mostrarlos
    carculatorData.push(valueBtn);
    acumulatorNumber = carculatorData.join("");
    showNumbers.textContent = acumulatorNumber;

  }

};

allBtn.forEach((btn) => btn.addEventListener("click", () => getDataBtn(btn)));
// Calculator