let texto = prompt("Introduce un texto:");
let contadorVocales = 0;

for (let i = 0; i < texto.length; i++) {
    let caracter = texto[i].toLowerCase();

    if (caracter === "a" || caracter === "e" || caracter === "i" || caracter === "o" || caracter === "u") {
        contadorVocales++;
    }
}

document.write("El texto tiene " + contadorVocales + " vocales");
