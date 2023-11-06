let cadena = prompt("Introduce una cadena de texto:");
let cadenaAlReves = "";

for (let i = cadena.length - 1; i >= 0; i--) {
    cadenaAlReves += cadena[i];
}

document.write(cadenaAlReves + "</br> Su string al verre :D");
