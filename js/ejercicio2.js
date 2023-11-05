let nota = prompt("Ingrese una nota del 0 al 10: ");

if (isNaN(nota)) {
  alert("Introduce un número válido");
} else {
  nota = parseInt(nota);
  if (nota < 0 || nota > 10) {
    alert("Número erróneo ");
  } else if (nota >= 0 && nota <= 2) {
    alert("Muy deficiente ");
  } else if (nota >= 3 && nota <= 4) {
    alert("Insuficiente");
  } else if (nota >= 5 && nota <= 6) {
    alert("Suficiente");
  } else if (nota == 7) {
    alert("Bien");
  } else if (nota >= 8 && nota <= 9) {
    alert("Notable");
  } else {
    alert("Sobresaliente");
  }
}
