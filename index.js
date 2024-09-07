window.onload = inicio;
const NOMBRECORRECTO = "vixy";

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
  if (nombre == NOMBRECORRECTO) {
    document.querySelector("#saludo").innerHTML = `Hola ${nombre}`;
  } else{
    document.querySelector("#saludo").innerHTML = "";
    document.querySelector("#campo").value = "";
    document.querySelector("#campo").focus();
  }
}
