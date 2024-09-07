window.onload = inicio;
const NOMBRECORRECTO = "VIXY";

function inicio() {
  document.querySelector("body").insertAdjacentHTML(
    "beforeend",
    `<input id="campo" type="text" />
    <button>Aceptar</button>
    <div id="saludo"></div>`
  );

  document.querySelector("button").onclick = leer;
}

function leer() {
  let nombre = document.querySelector("#campo").value;
  let nombreMayusculas = nombre.toUpperCase();
  let nombreFormateado =
    nombre.substr(0, 1).toUpperCase() + nombre.substr(1).toLowerCase(2, 2);
  if (nombreMayusculas == NOMBRECORRECTO) {
    document.querySelector("#saludo").innerHTML = `Hola ${nombreFormateado} <button id="botton">Ir a la web</button>`;
    document.querySelector("#botton").onclick=acceder;
  } else {
    document.querySelector("#saludo").innerHTML = "";
    document.querySelector("#campo").value = "";
    document.querySelector("#campo").focus();
  }
}

function acceder(){
  location.href="https://www.html6.es";
}