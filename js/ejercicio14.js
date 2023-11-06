let cadena = prompt("Introduce una cadena de texto:");
let cadenaConGuiones = "";

for (let i = 0; i < cadena.length; i++) {
  cadenaConGuiones += cadena[i] + "-";
}

document.write(cadenaConGuiones);
