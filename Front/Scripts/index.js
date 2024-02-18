const crearCyO = require("./modules/criterio");
const botonCyO = document.getElementById("botonCyO");
function disButton() {
    
    botonCyO.disabled = true;
}

botonCyO.addEventListener("click",crearCyO);
botonCyO.addEventListener("click",disButton);