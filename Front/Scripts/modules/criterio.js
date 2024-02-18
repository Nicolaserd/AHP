class Criterio {
    constructor(nombre,arrOpciones){
        this.nombre = nombre;
        this.arrOpciones=arrOpciones;
    }
    
}

function crearCyO() {
        
    const criteriosNumero = document.getElementById("criteriosNum");
    const opcionesNumero = document.getElementById("opcionesNum");
    const criteriosNum = criteriosNumero.value;
    const opcionesNum = opcionesNumero.value;
    const criterios = document.getElementById("criterios");
    const opciones = document.getElementById("opciones");

    console.log(criteriosNum);

    for (let i = 0; i < parseInt(criteriosNum); i++) {
        //criterios
        const contenedorCriterios = document.createElement("div");
        contenedorCriterios.classList.add("contenedorCriterios");
        criterios.appendChild(contenedorCriterios);

        const labelCriterios = document.createElement("label");
        labelCriterios.setAttribute("for", `labelCriterios${i+1}`);
        labelCriterios.textContent = `Criterio ${i+1}:`;
        const inputCriterios = document.createElement("input");
        inputCriterios.id=`labelCriterios${i+1}`;
        
        contenedorCriterios.appendChild(labelCriterios);        
        contenedorCriterios.appendChild(inputCriterios);
       
               
    }

    for (let i = 0; i < parseInt(opcionesNum); i++) {
     //opciones
     const contenedorOpciones = document.createElement("div");
     contenedorOpciones.classList.add("contenedorOpciones");
     opciones.appendChild(contenedorOpciones);

     const labelOpciones = document.createElement("label");
     labelOpciones.setAttribute("for", `labelOpciones${i+1}`);
     labelOpciones.textContent = `Opcion ${i+1}:`;
     const inputOpciones = document.createElement("input");
     inputOpciones.id=`labelOpciones${i+1}`;
     
     contenedorOpciones.appendChild(labelOpciones);        
     contenedorOpciones.appendChild(inputOpciones);
    }
    const todoOpYCri = document.getElementById("todoOpYCri");
    const boton = document.createElement("button");
    
    boton.textContent = "Generar Matriz";
    boton.classList.add("btn", "btn-primary");
    boton.id="botonGenerarM";
    todoOpYCri.appendChild(boton);

    const encabezadoCyO = document.getElementById("encabezadoCyO");
    const h2OyC = document.createElement("h2");
    h2OyC.innerHTML = "Nombres de Criterios y Opciones";
    encabezadoCyO.appendChild(h2OyC);

    criteriosNumero.value ="";
    opcionesNumero.value="";
   
}



module.exports = crearCyO;