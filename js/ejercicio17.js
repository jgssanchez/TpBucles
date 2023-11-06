let texto = prompt("Introduce un texto:");
let posicionVocal = -1;

for (let i = 0; i < texto.length; i++) {
    let caracter = texto[i].toLowerCase();

    if (caracter === "a" || caracter === "e" || caracter === "i" || caracter === "o" || caracter === "u") {
        posicionVocal = i;
        break;
    }
}

if (posicionVocal !== -1) {
    document.write("La primera vocal ta en la posición " + posicionVocal);
} else {
    document.write("No se encontró ninguna vocal en el texto.");
}
