let numero = prompt("Introduce un número para generar la pirámide:");

numero = parseInt(numero);

    if (numero > 50) {
        alert("El número no puede ser mayor que 50.");
    } else {
        for (let i = 1; i <= numero; i++) {
            let linea = "";
            for (let j = 1; j <= i; j++) {
                linea += j;
            }
            console.log(linea);
        }
    }

