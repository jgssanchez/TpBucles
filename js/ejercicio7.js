let numero = prompt("Introduce un número para su pirámide inversa:");

if (numero >= 50) {
    alert("El valor introducido no es un número válido.");
} else {
    numero = parseInt(numero);

    if (numero > 50) {
        alert("El número no puede ser mayor que 50.");
    } else {
        for (let i = numero; i >= 1; i--) {
            let linea = "";
            for (let j = 1; j <= i; j++) {
                linea += i;
            }
            console.log(linea);
        }
    }
}
