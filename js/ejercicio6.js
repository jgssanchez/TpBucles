let numero = prompt("Introduce un número para generar la pirámide:");


    if (numero > 50) {
        alert("El número no puede ser mayor que 50.");
    } else {
        for (let i = 1; i <= numero; i++) {
            let linea = "";
            for (let l = 1; l <= i; l++) {
                linea += l;
            }
            console.log(linea);
        }
    }

