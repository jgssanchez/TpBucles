let edades = [];
let nombres = [];

for (let i = 0; i < 3; i++) {
  let edad = prompt("Introduce una edad:");
  let nombre = prompt("Introduce un nombre:");

  if (!/^\d+$/.test(edad)) {
    alert("La edad introducida no es un número válido.");
    i--;
  } else {
    edades.push(parseInt(edad));
    nombres.push(nombre);
  }
}

let indiceMayor = edades.indexOf(Math.max(...edades));
let nombreMayor = nombres[indiceMayor];

alert("La persona de mayor edad es: " + nombreMayor);
