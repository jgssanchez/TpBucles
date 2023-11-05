let suma = 0;

while (true) {
  let input = prompt("Ingrese un numero:");
  if (input === null) {
    break;
  }
  let numero = parseFloat(input);
  if (isNaN(numero)) {
    alert("Numeros dije... try again.");
    continue;
  }
  suma += numero;
}

alert("La suma total de los números es... " + suma + " :D");
