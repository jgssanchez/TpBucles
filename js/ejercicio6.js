let numero = prompt("Introduce un número para generar la pirámide:");


    if (numero > 30) {
        alert("El número no puede ser mayor que 30");
    } else {
        for (let i = 1; i <= numero; i++) {
            let linea = "";
            for (let j = 1; j <= i; j++) {
                linea += i;
            }
            console.log(linea);
        }
    }

